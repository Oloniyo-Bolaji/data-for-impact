"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/data";

const Metrics = () => {
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate counts with requestAnimationFrame
  useEffect(() => {
    if (!start) return;

    metrics.forEach((metric, i) => {
      let startValue = 0;
      const endValue = parseInt(metric.metric, 10);
      const duration = 2000; // 2s
      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * endValue);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = currentValue;
          return newCounts;
        });

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, [start]);

  return (
    <section ref={sectionRef} className="px-5 py-10">
      <div className="max-w-screen-xl mx-auto w-full h-full flex justify-center items-center">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-7 sm:shadow-[5px_5px_10px_#7A7A7A50]">
          {metrics.map((metric, index) => (
            <div key={index} className="w-full flex-col-center p-5">
              <h1 className="text-[50px] text-[#1e365b] sm:font-[800] font-bold">
                {counts[index]}
                {metric.plus ? "+" : ""}
              </h1>
              <p className="text-grey sm:text-[15px] text-[14px]">
                {metric.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
