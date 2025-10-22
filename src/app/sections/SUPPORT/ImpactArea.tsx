import { BookOpen, Globe, Laptop, Users } from "lucide-react";
import React from "react";

const impactAreas = [
  {
    icon: Laptop,
    title: "Technology Access",
    description:
      "Providing computers, software licenses, and high-speed internet for hands-on learning.",
    amount: "",
  },
  {
    icon: Users,
    title: "Instructor Support",
    description:
      "Compensating local youth instructors who guide students through their learning journey.",
    amount: "",
  },
  {
    icon: BookOpen,
    title: "Learning Materials",
    description:
      "Course content, project resources, and certification programs for graduates.",
    amount: "",
  },
  {
    icon: Globe,
    title: "Community Space",
    description:
      "Maintaining our learning center with electricity, cooling, and safe workspace.",
    amount: "",
  },
];

const ImpactArea = () => {
  return (
    <section id="impact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            Where Your{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Support Goes
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We believe in transparency. Here's exactly how contributions power
            our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <area.icon size={28} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-purple-400">
                    {area.amount}
                  </div>
                  {/* <div className="text-xs text-slate-500">Monthly Cost</div> */}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Funding Breakdown */}
        {/* <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-10 border border-purple-500/20">
          <h3 className="text-3xl font-bold text-center mb-8">
            Monthly Operating Budget
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  category: "Technology & Infrastructure",
                  percent: 40,
                  amount: "$2,500",
                },
                {
                  category: "Instructor Support",
                  percent: 30,
                  amount: "$1,800",
                },
                {
                  category: "Facilities & Operations",
                  percent: 20,
                  amount: "$1,200",
                },
                {
                  category: "Learning Materials",
                  percent: 10,
                  amount: "$800",
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">
                      {item.category}
                    </span>
                    <span className="text-purple-400 font-bold">
                      {item.amount}
                    </span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <div className="text-4xl font-black text-white mb-2">
                $6,300/month
              </div>
              <div className="text-slate-400">
                Total monthly budget to serve 100+ students
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ImpactArea;
