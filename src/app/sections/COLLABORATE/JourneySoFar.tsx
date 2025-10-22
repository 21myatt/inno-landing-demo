import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import img01 from "@/assets/img01.jpg";
import img02 from "@/assets/img02.jpg";
import img03 from "@/assets/img03.jpg";
import img04 from "@/assets/img04.jpg";

const impactStories = [
  {
    image: img01,
    title: "VR Exposure Events",
    description: "100+ students experienced cutting-edge VR technology",
    stat: "100+",
    label: "Students",
  },
  {
    image: img02,
    title: "Creative Tech Bootcamp",
    description: "We already launch 3 batches in Mae Sot",
    stat: "50+",
    label: "Graduates",
  },
  {
    image: img03,
    title: "Community Learning Center",
    description: "Opened first physical space for hands-on training",
    stat: "1",
    label: "Center",
  },
  {
    image: img04,
    title: "Online Course Platform",
    description: "Launched Moodle LMS for self-paced learning",
    stat: "∞",
    label: "Access",
  },
];

const JourneySoFar = () => {
  return (
    <section id="our-impact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Journey
            </span>{" "}
            So Far
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Together we keep walking — see how far we’ve come.
          </p>
        </div>

        {/* Photo Grid with Stories */}
        <div className="grid md:grid-cols-2 gap-6">
          {impactStories.map((story, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden h-96 cursor-pointer"
            >
              {/* Image */}
              <Image
                src={story.image}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="flex items-end gap-4 mb-4">
                    <div className="text-6xl font-black text-amber-400">
                      {story.stat}
                    </div>
                    <div className="text-2xl font-bold text-amber-300 mb-2">
                      {story.label}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                  <p className="text-slate-300">{story.description}</p>
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-10 border border-amber-500/20">
            <h3 className="text-3xl font-bold text-center mb-8">What's Next</h3>
            <div className="space-y-4">
              {[
                {
                  year: "2025 Q2",
                  goal: "Launch online in-person training",
                },
                {
                  year: "2025 Q4",
                  goal: "Launch online self-paced courses on Moodle LMS",
                },
                {
                  year: "Next",
                  goal: "Networking communities & Creative Tech Tour",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-600/20 rounded-xl p-4"
                >
                  <div className="w-24 text-amber-400 font-bold">
                    {item.year}
                  </div>
                  <div className="flex-1 text-slate-300">{item.goal}</div>
                  <CheckCircle className="text-amber-400" size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySoFar;
