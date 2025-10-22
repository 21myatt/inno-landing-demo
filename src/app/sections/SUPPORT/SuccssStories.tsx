import React from "react";

const SuccssStories = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            Real <span className="text-amber-400">Impact Stories</span>
          </h2>
          <p className="text-xl text-slate-400">
            Meet the students whose lives have been transformed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl">
                👩
              </div>
              <div>
                <h4 className="font-bold text-xl">Ma Aurora Khin</h4>
                <p className="text-sm text-slate-500">
                  Graphic Design Graduate
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Before Inno House, I had no computer skills. Now I design logos
              and social media content for local businesses. The free courses
              and patient instructors changed everything for me.
            </p>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400">
                  ⭐
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl">
                👨
              </div>
              <div>
                <h4 className="font-bold text-xl">Mg Thaung</h4>
                <p className="text-sm text-slate-500">
                  Web Development Graduate
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Inno House provided everything—laptops, software, and mentorship.
              I learned on Zoom when I couldn't visit, and practiced at the
              center when I could. Now I have real job opportunities.
            </p>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400">
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccssStories;
