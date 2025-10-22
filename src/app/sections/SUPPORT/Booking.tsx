import Cal from "@calcom/embed-react";
import { CheckCircle } from "lucide-react";
import React from "react";

interface BookingProps {
  title: string;
  description: string;
  bullets: string[];
  highlight?: string;
}

const Booking: React.FC<BookingProps> = ({
  title,
  description,
  bullets,
  highlight,
}) => {
  return (
    <section id="meeting" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black"></div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            {title.split(" ").map((word, i) => {
              const cleanWord = word.replace(/[^a-zA-Z]/g, ""); // remove ? , . etc
              const shouldHighlight =
                highlight &&
                cleanWord.toLowerCase() === highlight.toLowerCase();

              return shouldHighlight ? (
                <span
                  key={i}
                  className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent"
                >
                  {word + " "}
                </span>
              ) : (
                word + " "
              );
            })}
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {bullets.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-400">
                <CheckCircle className="text-amber-400" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cal.com Embed */}
        <div className="relative z-10 w-full px-6 md:px-12">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800">
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
      </div>
    </section>
  );
};

export default Booking;
