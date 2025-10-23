import { useState, useEffect, useMemo, useRef } from "react";
import logo from "@/assets/logo.png";
import { FormData, FormField } from "./types";
import Footer from "@/app/sections/HOME/Footer";

interface RegistrationFormProps {
  form: FormData;
  isSubmitting: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  redirectUrl?: string;
}

const formFields: FormField[] = [
  { name: "name", type: "text", placeholder: "Name", required: true },
  { name: "email", type: "email", placeholder: "Email", required: true },
  { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
  {
    name: "city",
    type: "text",
    placeholder: "Current Living City",
    required: true,
  },
  {
    name: "profession",
    type: "text",
    placeholder: "Profession",
    required: true,
  },
];

const questions: Record<string, string> = {
  name: "What's your name?",
  email: "What's your email?",
  phone: "What's your phone number?",
  city: "Where do you live?",
  profession: "What's your profession?",
};

// --- Helpers -------------------------------------------------------------

// Reasonable list of common disposable domains (not huge)
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "mailinator.net",
  "10minutemail.com",
  "10minutemail.net",
  "10minemail.com",
  "guerrillamail.com",
  "guerrillamail.info",
  "guerrillamail.net",
  "guerrillamail.org",
  "sharklasers.com",
  "grr.la",
  "temp-mail.org",
  "temp-mail.io",
  "tempmail.ninja",
  "tempmailo.com",
  "yopmail.com",
  "yopmail.fr",
  "yopmail.net",
  "getnada.com",
  "nada.ltd",
  "dispostable.com",
  "throwawaymail.com",
  "trashmail.com",
  "trashmail.de",
  "emailondeck.com",
  "mintemail.com",
  "moakt.com",
  "mytemp.email",
  "fakeinbox.com",
  "maildrop.cc",
  "spamgourmet.com",
]);

const isValidEmailFormat = (email: string) => {
  const re =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
  return re.test(email.trim());
};

const isDisposableEmail = (email: string) => {
  const at = email.lastIndexOf("@");
  if (at === -1) return false;
  const domain = email.slice(at + 1).toLowerCase();
  return DISPOSABLE_DOMAINS.has(domain);
};

const isValidThaiPhone = (raw: string) => {
  const value = raw.replace(/\s|-/g, ""); // strip spaces/dashes
  // Local: 0 followed by 9 digits (total length 10)
  if (/^0\d{9}$/.test(value)) return true;
  // International: +66 followed by 9 digits (total length 12 incl "+")
  if (/^\+66\d{9}$/.test(value)) return true;
  return false;
};

// Burmese error messages (UI is English, errors in Burmese)
const MSG_REQUIRED = "ဤနေရာကို ဖြည့်ရန် လိုအပ်ပါသည်။";
const MSG_EMAIL_FORMAT = "အီးမေးလ်ဖော်မတ် မှန်ကန်အောင် ထည့်ပါ။";
const MSG_EMAIL_DISPOSABLE =
  "တစ်ခါသုံး အီးမေးလ်ဒိုမိန်းများကို မထည့်ပါနှင့်။ တရားဝင်အီးမေးလ်ဖြည့်ပါ။";
const MSG_THAI_PHONE =
  "ထိုင်းဖုန်းနံပါတ်ဖော်မတ် ဖြည့်ပါ (0XXXXXXXXX သို့မဟုတ် +66XXXXXXXXX)။";

type FieldErrors = Partial<Record<keyof FormData, string | null>>;

// ------------------------------------------------------------------------

export function RegistrationForm({
  form,
  isSubmitting,
  error,
  onSubmit,
  onChange,
  redirectUrl = "/",
}: RegistrationFormProps) {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(15);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentField = formFields[currentFieldIndex];
  const progress = ((currentFieldIndex + 1) / formFields.length) * 100;
  const isLastField = currentFieldIndex === formFields.length - 1;

  const isFormComplete = useMemo(
    () => formFields.every((f) => !!form[f.name]),
    [form]
  );

  // Redirect countdown after submission
  useEffect(() => {
    if (!isFormSubmitted) return;
    if (redirectCountdown <= 0) {
      window.location.href = redirectUrl;
      return;
    }
    const timer = setTimeout(() => {
      setRedirectCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isFormSubmitted, redirectCountdown, redirectUrl]);

  // Focus input on field change
  useEffect(() => {
    inputRef.current?.focus();
  }, [currentFieldIndex]);

  // --- Validation per field (runs only when attempting to go Next/Submit)
  const validateSingleField = (
    name: keyof FormData,
    value: string
  ): string | null => {
    const trimmed = (value ?? "").trim();

    // Required for all fields in this form
    if (!trimmed) return MSG_REQUIRED;

    if (name === "email") {
      if (!isValidEmailFormat(trimmed)) return MSG_EMAIL_FORMAT;
      if (isDisposableEmail(trimmed)) return MSG_EMAIL_DISPOSABLE;
    }

    if (name === "phone") {
      if (!isValidThaiPhone(trimmed)) return MSG_THAI_PHONE;
    }

    return null;
  };

  const validateAll = (): FieldErrors => {
    const nextErrors: FieldErrors = {};
    for (const f of formFields) {
      const msg = validateSingleField(f.name as keyof FormData, form[f.name]);
      if (msg) nextErrors[f.name as keyof FormData] = msg;
    }
    return nextErrors;
  };

  const goNextIfValid = () => {
    // validate current field only
    const msg = validateSingleField(
      currentField.name as keyof FormData,
      form[currentField.name]
    );
    if (msg) {
      setFieldErrors((prev) => ({ ...prev, [currentField.name]: msg }));
      return; // stay on the same field
    }
    // clear error for current field and go next
    setFieldErrors((prev) => ({ ...prev, [currentField.name]: null }));
    if (!isLastField) {
      setCurrentFieldIndex((i) => i + 1);
    }
  };

  const handleNext = () => {
    goNextIfValid();
  };

  // Enter behavior (only validate current, move next or submit)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    // Empty? keep button disabled behavior but also surface "required"
    if (!form[currentField.name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [currentField.name]: MSG_REQUIRED,
      }));
      return;
    }

    // On last field -> attempt submit
    if (isLastField) {
      handleSubmit(e as any);
      return;
    }

    // Otherwise -> next step if valid
    goNextIfValid();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields; if any error, jump to the first invalid
    const allErrors = validateAll();
    const firstInvalidIndex = formFields.findIndex(
      (f) => allErrors[f.name as keyof FormData]
    );
    if (firstInvalidIndex !== -1) {
      setFieldErrors(allErrors);
      setCurrentFieldIndex(firstInvalidIndex);
      return; // block submit
    }

    await onSubmit(e);
    setTimeout(() => setIsFormSubmitted(true), 500);
  };

  // --- Render Thank You screen
  if (isFormSubmitted) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <div className="mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4">
              <img
                src={logo.src}
                alt="Inno Night Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-yellow-400 text-lg md:text-xl font-['Poppins',sans-serif] font-semibold">
              Inno Night
            </p>
          </div>

          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-yellow-400 animate-bounce"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Poppins',sans-serif]">
            Thank you!
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-['Inter',sans-serif]">
            Your registration is complete! We’ll send a confirmation email with
            your QR pass for the event shortly.
          </p>

          <div className="inline-block px-8 py-4 bg-yellow-400 text-black rounded-lg font-bold text-lg font-['Poppins',sans-serif]">
            Redirecting in {redirectCountdown}s
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  const currentError = fieldErrors[currentField.name as keyof FormData] || null;

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-black flex flex-col p-4 md:p-6 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500&display=swap');
      `}</style>

      <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
        {/* Logo and Event Name */}
        <div className="mb-8 md:mb-12 flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 mb-4">
            <img
              src={logo.src}
              alt="Inno Night Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-yellow-400 text-lg md:text-xl font-['Poppins',sans-serif] font-semibold">
            Inno Night Registration
          </h3>
          <p className="text-slate-400 text-md font-['Poppins',sans-serif] font-semibold">
            31 OCT 2025
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 md:mb-12">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 font-['Inter',sans-serif]">
            {currentFieldIndex + 1} of {formFields.length}
          </p>
        </div>

        {/* Server Error (submitToGoogleSheets) */}
        {error && (
          <div className="mb-8 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="bg-red-950 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-400 font-medium font-['Inter',sans-serif]">
                {error}
              </p>
            </div>
          </div>
        )}

        {/* Question */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight font-['Poppins',sans-serif]">
            {questions[currentField.name]}
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full" />
        </div>

        {/* Input */}
        <div className="mb-2">
          <input
            ref={inputRef}
            autoFocus
            type={currentField.type}
            name={currentField.name}
            value={form[currentField.name]}
            onChange={(e) => {
              // keep default onChange, but don't validate live
              // clear only if user starts typing and there was a "required" error
              if (fieldErrors[currentField.name as keyof FormData]) {
                // don't auto-clear non-required errors to avoid flicker while typing
                // we only clear on NEXT/SUBMIT success
              }
              onChange(e);
            }}
            onKeyDown={handleKeyDown}
            placeholder={currentField.placeholder}
            className="w-full text-xl md:text-3xl py-3 md:py-4 px-2 bg-transparent border-b-2 border-gray-700
                       focus:border-yellow-400 focus:outline-none transition-colors placeholder-gray-600
                       text-white font-['Inter',sans-serif]"
          />
        </div>

        {/* Inline Error (Burmese) */}
        {currentError && (
          <p className="text-red-400 text-sm mt-2 font-['Inter',sans-serif]">
            {currentError}
          </p>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 md:mt-12 gap-4">
          <button
            type="button"
            onClick={() => setCurrentFieldIndex((i) => Math.max(0, i - 1))}
            disabled={currentFieldIndex === 0}
            className="px-4 md:px-6 py-2 md:py-3 text-gray-400 hover:text-yellow-400 font-medium
                       disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-['Poppins',sans-serif]"
          >
            Back
          </button>

          <button
            type={isLastField ? "submit" : "button"}
            onClick={isLastField ? undefined : handleNext}
            disabled={isSubmitting || !form[currentField.name]}
            className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black
                       font-semibold rounded-lg hover:shadow-xl hover:shadow-yellow-400/50 hover:scale-105
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                       transition-all duration-200 font-['Poppins',sans-serif] text-sm md:text-base"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Submitting...
              </span>
            ) : isLastField ? (
              "Submit"
            ) : (
              "Next"
            )}
          </button>
        </div>

        {/* Hint */}
        <div className="mt-8 md:mt-12 text-center text-xs md:text-sm text-gray-500 font-['Inter',sans-serif] min-h-6">
          {isFormComplete && "Press Enter to continue"}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </form>
  );
}
