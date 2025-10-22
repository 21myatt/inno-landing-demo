import { ArrowRight, Handshake, Rocket } from "lucide-react";
import React from "react";

const Hero3 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/20 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.2) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-3 backdrop-blur-sm mb-8">
          <Handshake className="text-amber-400" size={20} />
          <span className="text-amber-300 font-medium">Partner for Impact</span>
        </div>

        <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
          Let's Create
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
            Impact Together
          </span>
        </h1>

        <p className="text-xl lg:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Together, we can create a future where displaced youth gain equal
          access to technology, education, and opportunity.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#get-started"
            className="group px-10 py-5 rounded-2xl font-bold text-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/50 flex items-center justify-center gap-3"
          >
            Start Collaborating
            <Rocket className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#our-impact"
            className="px-10 py-5 rounded-2xl font-bold text-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
          >
            See Our Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { number: "100+", label: "Students Reached" },
            { number: "50+", label: "Graduates" },
            { number: "10+", label: "Go to Career" },
            { number: "4", label: "Batches Run" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800"
            >
              <div className="text-4xl font-black text-amber-400 mb-2">
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

export default Hero3;
