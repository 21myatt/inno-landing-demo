import Cal from "@calcom/embed-react";
import { CheckCircle } from "lucide-react";
import React from "react";

const Booking = () => {
  return (
    <section id="meeting" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black"></div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            We'd love to discuss how you can support our mission. Book a meeting
            with our team to learn more about partnership opportunities, funding
            needs, and our vision for the future.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="text-amber-400" size={20} />
              <span>30-minute intro call</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="text-amber-400" size={20} />
              <span>Learn about our programs</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="text-amber-400" size={20} />
              <span>Discuss partnership options</span>
            </div>
          </div>
        </div>

        {/* Cal.com Embed */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 max-w-4xl mx-auto">
          <div
            className="bg-white rounded-2xl overflow-hidden"
            style={{ height: "700px" }}
          >
            <Cal
              namespace="inno-house-test-meeting"
              calLink="myatt/inno-house-test-meeting"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">
            Can't find a suitable time?{" "}
            <a
              href="mailto:innohouseoffice@gmail.com"
              className="text-purple-400 hover:text-purple-300"
            >
              Email us directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
