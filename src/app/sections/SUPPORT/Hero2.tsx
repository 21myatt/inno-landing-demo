import {
  ArrowRight,
  Award,
  Heart,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";
import React from "react";

const stats = [
  { number: "100+", label: "Students Reached", icon: Users },
  { number: "50", label: "Graduates Employed", icon: Award },
  { number: "3", label: "Career Tracks", icon: Target },
  { number: "FREE", label: "Low-Cost for Students", icon: Heart },
];

const Hero2 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-yellow-500/20 rounded-full px-6 py-3 backdrop-blur-sm mb-8 mt-8 cursor-pointer group">
          <Heart
            className="text-red-400 transition-all duration-300 ease-in-out group-hover:fill-rose-500 group-hover:text-red-500"
            size={20}
          />
          <span className="text-rose-300 font-medium group-hover:text-rose-200 transition-colors duration-300">
            Support Our Mission
          </span>
        </div>

        <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
          Empower the Next
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
            Generation of Migrants
          </span>
        </h1>

        <p className="text-xl lg:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          We're bridging the digital divide for migrant youth along the
          Thai-Myanmar border. Your support transforms lives through education,
          opportunity, and community.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#meeting"
            className="group px-10 py-5 rounded-2xl font-bold text-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/50 flex items-center justify-center gap-3"
          >
            Let's Talk
            <MessageCircle className="group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="#our-story"
            className="px-10 py-5 rounded-2xl font-bold text-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Learn More
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800"
            >
              <stat.icon className="text-purple-400 mb-3 mx-auto" size={32} />
              <div className="text-4xl font-black text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
