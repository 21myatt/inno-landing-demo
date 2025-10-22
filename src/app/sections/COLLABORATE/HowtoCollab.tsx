import { Award, BookOpen, Heart, Lightbulb, Users, Zap } from "lucide-react";
import React from "react";
const waysTocollaborate = [
  {
    title: "Host Joint Workshops",
    description:
      "Co-organize skills training sessions for your community members",
    icon: BookOpen,
  },
  {
    title: "Share Resources",
    description: "Provide equipment, software licenses, or learning materials",
    icon: Heart,
  },
  {
    title: "Offer Mentorship",
    description: "Connect your experts with our students for guidance",
    icon: Users,
  },
  {
    title: "Create Opportunities",
    description: "Provide internships, freelance projects, or job placements",
    icon: Award,
  },
  {
    title: "Co-Develop Curriculum",
    description: "Help courses that meet industry needs",
    icon: Lightbulb,
  },
  {
    title: "Amplify Our Reach",
    description: "Spread the word through your networks and platforms",
    icon: Zap,
  },
];

const HowtoCollab = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            Ways to <span className="text-orange-400">Partner</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Multiple pathways to make an impact together
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {waysTocollaborate.map((way, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 hover:scale-105
                 relative overflow-hidden group"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                   blur-2xl rounded-[inherit]
                   [background:repeating-conic-gradient(from_0deg,rgba(251,191,36,0.35)_0_6deg,transparent_6deg_18deg)]

                   animate-[spin_10s_linear_infinite]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500
                   bg-[radial-gradient(80%_60%_at_30%_0%,rgba(251,191,36,0.25),transparent_60%),radial-gradient(80%_60%_at_70%_100%,rgba(249,115,22,0.18),transparent_60%)]"
              />

              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <way.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{way.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {way.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowtoCollab;
