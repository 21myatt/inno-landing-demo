"use client";

import { useLang } from "@/app/context/LangContext";
import { Mail, Phone, Facebook } from "lucide-react";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-slate-900 py-10 px-6 bg-black text-center text-slate-500 text-sm">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex gap-6 justify-center flex-wrap text-slate-400">
          <a
            href="tel:+66971408391"
            className="flex items-center gap-2 hover:text-amber-400 transition"
          >
            <Phone size={16} /> +66 971 40 83 91
          </a>
          <a
            href="mailto:innohouseoffice@gmail.com"
            className="flex items-center gap-2 hover:text-amber-400 transition"
          >
            <Mail size={16} /> innohouseoffice@gmail.com
          </a>
          <a
            href="https://www.facebook.com/InnoHouseBorder/"
            target="_blank"
            className="flex items-center gap-2 hover:text-amber-400 transition"
          >
            <Facebook size={16} /> @InnoHouseBorder
          </a>
        </div>

        <p className="text-slate-600">
          © 2025 Inno House —{" "}
          {lang === "mm"
            ? "ရွှေ့ပြောင်းနေထိုင်သူ အသိုင်းအဝိုင်းများကို စွမ်းအင်ပေးခြင်း"
            : "Empowering migrant communities"}{" "}
          —{" "}
          {lang === "mm"
            ? "မဲဆောက်, ထိုင်း-မြန်မာနယ်စပ်"
            : "Mae Sot, Thai-Myanmar Border"}
        </p>
      </div>
    </footer>
  );
}
