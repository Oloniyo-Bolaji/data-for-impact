"use client";

import { useEffect, useState } from "react";
import { metrics } from "@/lib/data";

const Metrics = () => {
  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    metrics.forEach((metric, i) => {
      let start = 0;
      const end = parseInt(metric.metric, 10);
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / end), 20);

      const interval = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = start;
          return newCounts;
        });
        if (start >= end) clearInterval(interval);
      }, stepTime);
    });
  }, []);

  return (
    <section className="px-5 py-10">
      <div className="max-w-screen-xl mx-auto w-full h-full flex justify-center items-center">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-7 sm:shadow-[5px_5px_10px_#7A7A7A50]">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="w-full flex-col-center p-5"
            >
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
