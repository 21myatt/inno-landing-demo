"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLang } from "@/app/context/LangContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLang = () => setLang(lang === "mm" ? "en" : "mm");

  const enrollUrl = "https://example.com/enroll-form"; // TEMP dummy URL

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-white">
          Inno House
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-slate-300 hover:text-white">
            {t.nav.home}
          </Link>
          <Link href="/support" className="text-slate-300 hover:text-white">
            {t.nav.support}
          </Link>
          <Link href="/collaborate" className="text-slate-300 hover:text-white">
            {t.nav.collaborate}
          </Link>

          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm text-white"
          >
            <Languages size={18} />
            {lang === "mm" ? "EN" : "မြန်မာ"}
          </button>

          <a
            href={enrollUrl}
            target="_blank"
            className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 rounded-lg font-bold text-black hover:scale-105 transition"
          >
            {t.nav.enrollNow}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/support"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            {t.nav.support}
          </Link>
          <Link
            href="/collaborate"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-300 hover:text-white"
          >
            {t.nav.collaborate}
          </Link>

          <button
            onClick={() => {
              toggleLang();
              setMobileOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
          >
            <Languages size={18} />
            {lang === "mm" ? "Switch to English" : "မြန်မာသို့ပြောင်းရန်"}
          </button>

          <a
            href={enrollUrl}
            target="_blank"
            className="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 rounded-xl font-bold text-black"
          >
            {t.nav.enrollNow}
          </a>
        </div>
      )}
    </nav>
  );
}
