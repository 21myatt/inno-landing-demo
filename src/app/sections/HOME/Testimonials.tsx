"use client";

import { testimonials } from "@/app/lib/testimonials";
import { useLang } from "@/app/context/LangContext";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const { t, lang } = useLang();

  return (
    <section className="py-32 px-6 relative bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2
            className={`font-black mb-6 ${
              lang === "mm"
                ? "text-5xl lg:text-7xl leading-normal"
                : "text-6xl lg:text-8xl leading-none"
            }`}
          >
            {t.testimonialsSection.title}{" "}
            <span className="text-emerald-400 mb-6">
              {t.testimonialsSection.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            {t.testimonialsSection.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((tm, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all duration-500"
            >
              <Quote
                className="absolute top-6 right-6 text-amber-500/20 group-hover:text-amber-500/40"
                size={48}
              />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl">
                  {tm.image}
                </div>
                <div>
                  <h4 className="font-bold text-xl">{tm.name}</h4>
                  <p className="text-sm text-slate-500">{tm.batch}</p>
                </div>
              </div>

              <div className="inline-block bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1 mb-4">
                <span className="text-sm text-amber-400 font-medium">
                  {tm.course}
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm">
                {lang === "mm" ? tm.text : tm.text_en}
              </p>

              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
