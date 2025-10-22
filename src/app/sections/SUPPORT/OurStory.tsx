import React from "react";
const milestones = [
  {
    year: "2023",
    event: "Inno House Founded",
    description: "Young migrants started teaching digital skills to peers",
  },
  {
    year: "2024",
    event: "First Two Batches",
    description: "27 students graduated with job-ready digital skills",
  },
  {
    year: "2024",
    event: "VR Events",
    description: "100+ students exposed to cutting-edge technology",
  },
  {
    year: "2025",
    event: "Scaling Impact",
    description: "Opening online courses and intensive face-to-face programs",
  },
  {
    year: "2025",
    event: "Traning Camp",
    description:
      "Team up with passionate institution and create your own digital training camp in Mae Sot.",
  },
];

const OurStory = () => {
  return (
    <section id="our-story" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Why <span className="text-amber-400">We Exist</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-200 leading-relaxed">
              <p>
                Along the Thai-Myanmar border, thousands of young migrants face
                a critical barrier:
                <strong className="text-white">
                  {" "}
                  lack of access to digital skills education
                </strong>
                . Without these skills, they're locked out of the modern
                economy.
              </p>

              <p>
                Traditional education systems often fail migrant communities.
                Language barriers, high costs, and lack of tailored support
                leave talented youth behind. We saw this problem and decided to
                solve it ourselves.
              </p>

              <p>
                <strong className="text-white">
                  Inno House was founded by young migrants, for young migrants.
                </strong>{" "}
                We understand the challenges because we've lived them. Our model
                combines free online courses with hands-on community center
                training—making world-class digital education accessible to
                everyone.
              </p>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 mt-8">
                <p className="text-white font-semibold text-xl mb-2">
                  Our Approach: Blended Learning
                </p>
                <p className="text-slate-400">
                  Students learn at their own pace online, then visit our
                  community center for hands-on practice with real computers and
                  guidance from peer instructors.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Our Journey</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-yellow-500/30 last:border-l-0"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500"></div>
                  <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/30 transition-all">
                    <div className="text-yellow-400 font-bold text-sm mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {milestone.event}
                    </h4>
                    <p className="text-slate-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
