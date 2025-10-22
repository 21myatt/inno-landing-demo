"use client";

import { useLang } from "@/app/context/LangContext";
import Link from "next/link";

export default function CoursesSection() {
  const { t, lang } = useLang();

  const courses = [
    {
      gradient: "from-pink-500 via-rose-500 to-orange-500",
      emoji: "🎨",
      ...t.coursesSection.course1,
    },
    {
      gradient: "from-purple-500 via-violet-500 to-indigo-500",
      emoji: "🎬",
      ...t.coursesSection.course2,
    },
    {
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      emoji: "💻",
      ...t.coursesSection.course3,
    },
  ];

  return (
    <section
      id="courses"
      className="py-32 px-6 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2
            className={`font-black mb-6 ${
              lang === "mm"
                ? "text-5xl lg:text-7xl leading-normal"
                : "text-6xl lg:text-8xl leading-none"
            }`}
          >
            {t.coursesSection.title}{" "}
            <span className="text-purple-400">
              {t.coursesSection.titleHighlight}
            </span>{" "}
            {t.coursesSection.titleEnd}
          </h2>
          <p className="text-xl text-slate-400">{t.coursesSection.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <div
              key={i}
              className="group relative bg-slate-900/80 backdrop-blur-lg rounded-3xl border border-slate-800 hover:border-slate-700 overflow-hidden transition"
            >
              <div className="p-8 relative z-10">
                <div className="text-6xl mb-6">{c.emoji}</div>
                <h3 className="text-3xl font-bold mb-2">{c.title}</h3>
                <p className="text-slate-400 mb-6">{c.description}</p>

                <div className="space-y-2 mb-6 text-slate-300">
                  {[c.skill1, c.skill2, c.skill3].map((s, j) => (
                    <div key={j} className="flex gap-2 items-center text-sm">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${c.gradient}`}
                      />
                      {s}
                    </div>
                  ))}
                </div>

                <Link
                  href="https://hub.innohouse.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`w-full py-3 rounded-xl font-bold bg-gradient-to-r ${c.gradient} hover:scale-105 transition`}
                  >
                    {t.coursesSection.cta}
                  </button>
                </Link>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-10 transition`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
