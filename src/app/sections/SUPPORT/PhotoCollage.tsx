import React, { useState, useEffect, useRef } from "react";

interface MediaItem {
  url: string;
  type: string;
  size: "large" | "medium" | "small";
  caption: string;
}

const PhotoCollage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const collageRef = useRef<HTMLDivElement>(null);

  // Dummy data with all supported formats
  const mediaItems: MediaItem[] = [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      type: "image/jpeg",
      size: "large",
      caption: "Students Learning Together",
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
      type: "image/jpeg",
      size: "medium",
      caption: "Coding Workshop",
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
      type: "image/webp",
      size: "medium",
      caption: "Design Session",
    },
    {
      url: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
      type: "image/gif",
      size: "small",
      caption: "Creativity in Action",
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700",
      type: "image/png",
      size: "medium",
      caption: "Graduation Day",
    },
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      type: "video/webm",
      size: "large",
      caption: "Campus Tour Video",
    },
    {
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600",
      type: "image/jpeg",
      size: "medium",
      caption: "Computer Lab",
    },
    {
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      type: "image/jpeg",
      size: "large",
      caption: "Team Collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
      type: "image/jpeg",
      size: "small",
      caption: "Success Moment",
    },
    {
      url: "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif",
      type: "image/gif",
      size: "small",
      caption: "Celebration",
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "translateY(0) scale(1)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = collageRef.current?.querySelectorAll(".collage-item");
    elements?.forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(30px) scale(0.95)";
      element.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const renderMedia = (item: MediaItem, index: number) => {
    const isVideo = item.type === "video/webm" || item.type === "video/mp4";

    if (isVideo) {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={item.url} type={item.type} />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <img
        src={item.url}
        alt={item.caption}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
    );
  };

  const getSizeClasses = (size: "large" | "medium" | "small") => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2 h-96";
      case "medium":
        return "md:col-span-1 md:row-span-1 h-64";
      case "small":
        return "md:col-span-1 md:row-span-1 h-48";
      default:
        return "md:col-span-1 md:row-span-1 h-64";
    }
  };

  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-black mb-6 text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Moments that capture the spirit of learning, growth, and community
            at Inno House
          </p>
        </div>

        {/* Collage Grid */}
        <div
          ref={collageRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
        >
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`collage-item group relative overflow-hidden rounded-2xl ${getSizeClasses(
                item.size
              )} cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Media Container */}
              <div className="absolute inset-0 bg-slate-900">
                {renderMedia(item, index)}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-2xl transition-all duration-300"></div>

              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl"></div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="backdrop-blur-xl bg-slate-900/50 rounded-xl p-4 border border-white/10">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {item.caption}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">
                      {item.type.split("/")[1]}
                    </span>
                    <span className="text-amber-400">•</span>
                    <span className="text-xs text-slate-400 capitalize">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Shine Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
                  hoveredIndex === index
                    ? "translate-x-full"
                    : "-translate-x-full"
                }`}
              ></div>

              {/* Format Badge */}
              <div className="absolute top-4 right-4 backdrop-blur-md bg-black/30 px-3 py-1 rounded-full border border-white/10">
                <span className="text-xs font-bold text-amber-400 uppercase">
                  {item.type.split("/")[1]}
                </span>
              </div>

              {/* Loading Skeleton Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse opacity-0 group-hover:opacity-0"></div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoCollage;
