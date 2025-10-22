import { CheckCircle } from "lucide-react";
import React from "react";

const ProblemState = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            The <span className="text-yellow-400">Challenge</span> We're Solving
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Understanding the barriers migrant youth face—and how we're removing
            them
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">⚠️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">
              Without Digital Skills
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Limited to low-wage manual labor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>No access to remote work opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Stuck in poverty cycle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Expensive bootcamps out of reach</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8">
            <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              With Inno House
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <span>Free training in high-demand skills</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <span>Work anywhere in the world remotely</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <span>3-5x higher earning potential</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  className="text-green-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <span>Community support and mentorship</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemState;
