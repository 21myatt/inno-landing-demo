"use client";

import { useLang } from "@/app/context/LangContext";
import { Globe, Zap, TrendingUp, Users } from "lucide-react";

export default function WhySection() {
  const { t, lang } = useLang();

  const benefits = [
    {
      gradient: "from-amber-500 to-orange-500",
      Icon: Globe,
      data: t.whySection.benefit1,
    },
    {
      gradient: "from-purple-500 to-pink-500",
      Icon: Zap,
      data: t.whySection.benefit2,
    },
    {
      gradient: "from-blue-500 to-cyan-500",
      Icon: TrendingUp,
      data: t.whySection.benefit3,
    },
    {
      gradient: "from-green-500 to-emerald-500",
      Icon: Users,
      data: t.whySection.benefit4,
    },
  ];

  return (
    <section
      id="student-features"
      className="py-32 px-6 relative bg-black text-white"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2
            className={`font-black  ${
              lang === "mm"
                ? "text-5xl lg:text-5xl leading-normal"
                : "text-6xl lg:text-8xl leading-none"
            }`}
          >
            {t.whySection.title}{" "}
            <span className="text-amber-400">
              {t.whySection.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mt-5">
            {t.whySection.subtitle}
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map(({ gradient, Icon, data }, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-800 hover:border-slate-700 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition`}
              />
              <div className="relative">
                {/* ICON + STAT */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <div
                    className={`text-3xl font-black bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}
                  >
                    {data.stat}
                  </div>
                </div>

                {/* TEXT */}
                <h3 className="text-2xl font-bold mb-3">{data.title}</h3>
                <p className="text-slate-400 text-lg">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
