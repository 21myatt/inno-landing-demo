import { CheckCircle, Globe, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";

const collaborationTypes = [
  {
    icon: Users,
    title: "Youth Groups",
    description:
      "Partner with student organizations to expand digital skills training",
    gradient: "from-amber-500 to-orange-500",
    benefits: ["Shared resources", "Joint workshops", "Student exchange"],
  },
  {
    icon: Globe,
    title: "Institutions",
    description: "Work with universities and schools to scale our impact",
    gradient: "from-purple-500 to-pink-500",
    benefits: [
      "Curriculum development",
      "Accreditation",
      "Research partnerships",
    ],
  },
  {
    icon: Lightbulb,
    title: "Organizations",
    description:
      "Collaborate with NGOs and social enterprises for community reach",
    gradient: "from-blue-500 to-cyan-500",
    benefits: ["Network expansion", "Resource sharing", "Joint funding"],
  },
  {
    icon: Rocket,
    title: "Tech Companies",
    description:
      "Partner with tech firms for equipment, mentorship, and opportunities",
    gradient: "from-green-500 to-emerald-500",
    benefits: ["Software licenses", "Mentorship programs", "Job placements"],
  },
];

const LookingFor = () => {
  return (
    <section id="why-collaborate" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            Who We're <span className="text-amber-400">Looking For</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We believe in the power of collaboration. Here's how different
            partners can join our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collaborationTypes.map((type, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <type.icon size={32} className="text-white" />
                </div>

                <h3 className="text-3xl font-bold mb-4">{type.title}</h3>
                <p className="text-slate-400 text-lg mb-6">
                  {type.description}
                </p>

                <div className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className={`text-amber-400`} />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookingFor;
