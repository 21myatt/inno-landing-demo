"use client";

import { useEffect, useRef, useState } from "react";

interface CountConfig {
  students: number;
  graduates: number;
  batches: number;
}

export default function useCountUp(config: CountConfig) {
  const { students, graduates, batches } = config;

  const [counts, setCounts] = useState({
    students: 0,
    graduates: 0,
    batches: 0,
  });

  const hasAnimated = useRef(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animateCount = (
      key: keyof CountConfig,
      target: number,
      duration = 2000
    ) => {
      let current = 0;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCounts((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateCount("students", students);
        animateCount("graduates", graduates);
        animateCount("batches", batches);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [students, graduates, batches]);

  return { counts, ref };
}
