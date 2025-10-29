"use client";

import { useEffect, useRef, useState } from "react";
import type { IScannerControls } from "@zxing/browser";
import { BrowserQRCodeReader } from "@zxing/browser";

type DetectionResult = {
  rawValue: string;
  format?: string;
};

const MAX_DEBUG_LINES = 8;
const AUTO_RESET_MS_DEFAULT = 10_000; // ← configurable auto reset (10s)

export default function QRScanner() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsRef = useRef<IScannerControls | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const streamStoppedRef = useRef(false);
  const autoResetTimerRef = useRef<number | null>(null);
  const countdownTickRef = useRef<number | null>(null);

  const [status, setStatus] = useState<
    "init" | "active" | "denied" | "unsupported" | "error"
  >("init");
  const [detected, setDetected] = useState<DetectionResult | null>(null);
  const [scannerReady, setScannerReady] = useState<boolean | null>(null);
  const [debugLines, setDebugLines] = useState<string[]>([]);
  const [frozenFrameUrl, setFrozenFrameUrl] = useState<string | null>(null);
  const [autoResetMs, setAutoResetMs] = useState<number>(AUTO_RESET_MS_DEFAULT);
  const [countdownMs, setCountdownMs] = useState<number | null>(null);

  // --- helpers ---
  const addDebug = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setDebugLines((prev) => {
      const trimmed =
        prev.length >= MAX_DEBUG_LINES
          ? prev.slice(-MAX_DEBUG_LINES + 1)
          : prev;
      return [...trimmed, `${timestamp} – ${message}`];
    });
  };

  const ensureCanvas = () => {
    if (canvasRef.current) return canvasRef.current;
    const canvas = document.createElement("canvas");
    canvasRef.current = canvas;
    return canvas;
  };

  const stopStream = () => {
    const video = videoRef.current;
    const stream = video?.srcObject as MediaStream | null;
    if (stream && !streamStoppedRef.current) {
      stream.getTracks().forEach((t) => t.stop());
      streamStoppedRef.current = true;
      addDebug("Camera stream stopped");
    }
    if (video) {
      try {
        video.pause();
      } catch {}
      // Keep srcObject to avoid flash; overlay frozen image handles visuals.
    }
  };

  const clearTimers = () => {
    if (autoResetTimerRef.current) {
      window.clearTimeout(autoResetTimerRef.current);
      autoResetTimerRef.current = null;
    }
    if (countdownTickRef.current) {
      window.clearInterval(countdownTickRef.current);
      countdownTickRef.current = null;
    }
  };

  const captureCurrentFrame = (): string | null => {
    const video = videoRef.current;
    if (!video) return null;
    const width = video.videoWidth;
    const height = video.videoHeight;
    if (!width || !height) return null;

    const canvas = ensureCanvas();
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(video, 0, 0, width, height);
    try {
      return canvas.toDataURL("image/jpeg", 0.92);
    } catch {
      return null;
    }
  };

  const startAutoReset = () => {
    setCountdownMs(autoResetMs);
    clearTimers();
    countdownTickRef.current = window.setInterval(() => {
      setCountdownMs((prev) => {
        if (prev === null) return null;
        const next = prev - 1000;
        return next >= 0 ? next : 0;
      });
    }, 1000);
    autoResetTimerRef.current = window.setTimeout(() => {
      resetScanner();
    }, autoResetMs);
  };

  // --- ZXing setup ---
  useEffect(() => {
    let mounted = true;

    const startZXing = async () => {
      if (typeof window === "undefined") return;

      setScannerReady(null);
      setStatus("init");
      streamStoppedRef.current = false;
      addDebug("Initializing ZXing QR reader");

      // Permissions probe (gives better error states on some browsers)
      if (!navigator.mediaDevices?.getUserMedia) {
        setStatus("unsupported");
        addDebug("mediaDevices.getUserMedia unavailable");
        return;
      }

      try {
        setStatus("active");
        setScannerReady(true);

        const reader = new BrowserQRCodeReader(); // QR only
        addDebug("ZXing reader created");

        const controls = await reader.decodeFromVideoDevice(
          undefined, // auto-select environment camera when possible
          videoRef.current!,
          (result, err, ctrls) => {
            // The callback can be noisy with "no result" errors; we ignore errors.
            if (!mounted) return;

            if (result) {
              const text = result.getText?.() ?? String(result);
              addDebug(`Detected QR: ${text}`);

              // 1) Freeze current frame BEFORE stopping stream
              const url = captureCurrentFrame();
              if (url) setFrozenFrameUrl(url);

              // 2) Update state
              setDetected({ rawValue: text, format: "qr_code" });

              // 3) Stop scanning & camera
              try {
                ctrls?.stop();
              } catch {}
              controlsRef.current = null;
              stopStream();

              // 4) Start auto-reset countdown (visible)
              startAutoReset();
            }
          }
        );

        if (!mounted) {
          controls.stop();
          return;
        }

        controlsRef.current = controls;
        addDebug("Camera active; streaming to ZXing");
      } catch (err: unknown) {
        // Map common errors
        const name =
          typeof err === "object" && err && "name" in err
            ? String((err as { name?: string }).name)
            : "";

        if (name === "NotAllowedError" || name === "PermissionDeniedError") {
          setStatus("denied");
          addDebug("Camera permission denied by user");
        } else if (
          name === "NotFoundError" ||
          name === "OverconstrainedError"
        ) {
          setStatus("error");
          addDebug("No suitable camera found");
        } else {
          setStatus("error");
          addDebug("Unable to start camera/ZXing");
        }
        setScannerReady(false);
      }
    };

    startZXing();

    return () => {
      mounted = false;
      clearTimers();
      try {
        controlsRef.current?.stop();
      } catch {}
      controlsRef.current = null;
      stopStream();
      canvasRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetScanner = async () => {
    clearTimers();
    setDetected(null);
    setFrozenFrameUrl(null);
    setCountdownMs(null);
    streamStoppedRef.current = false;

    try {
      controlsRef.current?.stop();
    } catch {}
    controlsRef.current = null;

    // Restart ZXing scan fresh
    addDebug("Resetting scanner");
    setStatus("init");
    setScannerReady(null);

    try {
      const reader = new BrowserQRCodeReader();
      const controls = await reader.decodeFromVideoDevice(
        undefined,
        videoRef.current!,
        (result, err, ctrls) => {
          if (result) {
            const text = result.getText?.() ?? String(result);
            addDebug(`Detected QR: ${text}`);

            const url = captureCurrentFrame();
            if (url) setFrozenFrameUrl(url);

            setDetected({ rawValue: text, format: "qr_code" });

            try {
              ctrls?.stop();
            } catch {}
            controlsRef.current = null;
            stopStream();

            startAutoReset();
          }
        }
      );

      controlsRef.current = controls;
      setStatus("active");
      setScannerReady(true);
      addDebug("Camera active; streaming to ZXing");
    } catch (err) {
      setStatus("error");
      setScannerReady(false);
      addDebug("Reset failed to restart camera");
    }
  };

  const statusText: Record<typeof status, string> = {
    init: "Starting camera…",
    active: "Camera active",
    denied: "Camera permission denied",
    unsupported: "Camera not supported",
    error: "Unable to access camera",
  };

  const instructionText =
    detected?.rawValue ??
    (scannerReady === false
      ? "QR detection is not supported on this device"
      : "Align the QR code within the frame");

  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center bg-black text-white">
      {/* === AUTO RESET TOP-CENTER PILL === */}
      {countdownMs !== null && (
        <div className="absolute inset-x-0 top-4 z-20 flex justify-center pointer-events-none">
          <span className="rounded-md bg-black/70 px-3 py-1 text-[20px] text-white/70">
            Auto reset in {Math.ceil(countdownMs / 1000)}s
          </span>
        </div>
      )}

      {/* LIVE VIDEO */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        muted
        autoPlay
      />

      {/* FROZEN BLURRED FRAME */}
      {frozenFrameUrl && (
        <img
          src={frozenFrameUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover blur-md"
          draggable={false}
        />
      )}

      {/* CENTER FRAME GUIDE */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="aspect-square w-3/4 max-w-sm border border-white/50" />
      </div>

      {/* BOTTOM AREA (RESET + INSTRUCTION) */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center px-6">
        <div className="w-full max-w-xl space-y-3">
          {detected && (
            <button
              type="button"
              onClick={resetScanner}
              className="pointer-events-auto w-full rounded-md bg-black/80 px-4 py-3 text-sm text-white/90 hover:bg-white/20 transition-colors"
            >
              Scan Another QR Code
            </button>
          )}

          <div className="pointer-events-none rounded-md bg-amber-600/70 px-4 py-3 text-center text-sm text-white/90">
            {instructionText}
          </div>
        </div>
      </div>
    </div>
  );
}
