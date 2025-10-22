"use client";

import { useLang } from "@/app/context/LangContext";
import useCountUp from "@/app/lib/useCountUp";

export default function Stats() {
  const { t, lang } = useLang();

  // EXACT values from original
  const { counts, ref } = useCountUp({
    students: 100,
    graduates: 50,
    batches: 4,
  });

  return (
    <section
      id="our-journey"
      ref={ref}
      className="py-32 px-6 relative bg-black text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`font-black mb-6  ${
              lang === "mm"
                ? "text-4xl lg:text-5xl leading-normal"
                : "text-6xl lg:text-8xl leading-none"
            }`}
          >
            {t.statsSection.title}{" "}
            <span className="text-cyan-400">
              {t.statsSection.titleHighlight}
            </span>
          </h2>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-12 backdrop-blur-xl border border-white/10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-7xl font-black mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                {counts.students}+
              </div>
              <div className="text-xl text-slate-400">
                {t.statsSection.stat1Label}
              </div>
              <div className="text-sm text-slate-500 mt-2">
                {t.statsSection.stat1Sub}
              </div>
            </div>

            <div>
              <div className="text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {counts.graduates}
              </div>
              <div className="text-xl text-slate-400">
                {t.statsSection.stat2Label}
              </div>
              <div className="text-sm text-slate-500 mt-2">
                {t.statsSection.stat2Sub}
              </div>
            </div>

            <div>
              <div className="text-7xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {counts.batches}
              </div>
              <div className="text-xl text-slate-400">
                {t.statsSection.stat3Label}
              </div>
              <div className="text-sm text-slate-500 mt-2">
                {t.statsSection.stat3Sub}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
