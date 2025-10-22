"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "@/app/context/LangContext";

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 bg-black text-white overflow-hidden"
    >
      {/* GRID OVERLAY */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* 🔥 GLOWING BLURRED LIGHTS (RESTORED) */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <Sparkles className="text-amber-400" size={16} />
            <span className="text-sm text-amber-300">{t.hero.badge}</span>
          </div>

          <h1
            className={`font-black  ${
              lang === "mm"
                ? "text-5xl lg:text-7xl leading-normal"
                : "text-6xl lg:text-8xl leading-none"
            }`}
          >
            <span>{t.hero.title1}</span>
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent animate-pulse">
              {t.hero.title2}
            </span>
            <span>{t.hero.title3}</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </p>
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            {t.hero.subtitle2}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 rounded-2xl font-bold text-lg text-black hover:scale-105 transition shadow-amber-500/30 shadow-lg">
              <span className="flex items-center gap-2">
                {t.hero.ctaPrimary}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>

            <button className="px-8 py-4 rounded-2xl font-bold text-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              {t.hero.ctaSecondary}
            </button>
          </div>

          <div className="flex items-center gap-8 pt-6">
            <StatBox value="100+" label={t.hero.students} />
            <Divider />
            {/* <StatBox value="27" label={t.hero.graduates} />
            <Divider /> */}
            <StatBox value="4" label={t.hero.batches} />
          </div>
        </div>

        {/* RIGHT Placeholder */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="text-slate-500">{/* Future Illustration */}</div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-amber-400">{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="h-10 w-px bg-slate-800" />;
}
