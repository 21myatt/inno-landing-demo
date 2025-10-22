"use client";

import { ArrowRight, Heart, Phone, Mail, Facebook } from "lucide-react";
import { useLang } from "@/app/context/LangContext";
import Link from "next/link";

export default function FinalCTA() {
  const { t, lang } = useLang();

  const ENROLL_URL = "https://hub.innohouse.org/"; // replace later
  const SUPPORT_URL = "https://www.facebook.com/InnoHouseBorder"; // replace later

  return (
    <section
      id="support"
      className="py-32 px-6 relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2
          className={`font-black mb-6 ${
            lang === "mm"
              ? "text-4xl lg:text-7xl leading-normal"
              : "text-6xl lg:text-8xl leading-none"
          }`}
        >
          {t.ctaSection.title1}
          <br />
          <span className="text-amber-400">{t.ctaSection.title2}</span>
        </h2>

        <p className="text-md text-slate-400 mb-12 max-w-2xl mx-auto">
          {t.ctaSection.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          {/* Primary CTA */}
          <a
            href={ENROLL_URL}
            target="_blank"
            className="group relative px-12 py-6 rounded-2xl font-bold  bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {t.ctaSection.ctaPrimary}
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={28}
              />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </a>

          {/* Secondary CTA */}
          <Link
            href="/support"
            target="_blank"
            className="group px-12 py-6 rounded-2xl font-bold  bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Heart size={24} />
            {t.ctaSection.ctaSecondary}
          </Link>
        </div>

        {/* Contact Links */}
        {/* <div className="flex flex-wrap justify-center gap-8 text-slate-500">
          <a
            href="tel:+66971408391"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Phone size={18} />
            +66 971 40 83 91
          </a>
          <a
            href="mailto:innohouseoffice@gmail.com"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Mail size={18} />
            innohouseoffice@gmail.com
          </a>
          <a
            href="https://www.facebook.com/InnoHouseBorder/"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Facebook size={18} /> @InnoHouseBorder
          </a>
        </div> */}
      </div>
    </section>
  );
}
