"use client";

import React, { useEffect, useRef, useState } from "react";
import Heading from "./Heading";

const Projects = ({ projects }) => {
  const listRef = useRef(null); // wrapper of the project cards
  const indicatorRef = useRef(null); // left indicator column
  const itemRefs = useRef([]); // refs for each project DOM node

  const [dotPositions, setDotPositions] = useState([]); // pixel positions (relative to list top) of each dot center
  const [listHeight, setListHeight] = useState(0); // height of the whole list area (px)
  const [fillHeight, setFillHeight] = useState(0); // current fill height for the colored line (px)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let rafId = null;

    const updatePositionsAndActive = () => {
      if (!listRef.current) return;
      const listRect = listRef.current.getBoundingClientRect();
      const listTop = listRect.top;
      const lh = Math.max(listRect.height, 0);
      setListHeight(lh);

      const centers = itemRefs.current.map((el) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        // center relative to the top of the list container
        return r.top - listTop + r.height / 2;
      });

      setDotPositions(centers);

      // viewport center relative to list top
      const viewportCenterRel = window.innerHeight / 2 - listTop;

      // choose the item whose center is nearest to viewport center
      let bestIdx = 0;
      let bestDist = Infinity;
      centers.forEach((c, i) => {
        const d = Math.abs(c - viewportCenterRel);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });

      setActiveIndex(bestIdx);

      // fill up to the center of the active item, clamp to list height
      const targetHeight = Math.max(0, Math.min(lh, centers[bestIdx] || 0));
      setFillHeight(targetHeight);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePositionsAndActive);
    };

    // initial measurement (run after a tick so DOM is settled)
    rafId = requestAnimationFrame(updatePositionsAndActive);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []); // run once on mount

  // helper to set refs in map
  const setItemRef = (el, i) => {
    itemRefs.current[i] = el;
  };

  const [dotSize, setDotSize] = useState(25);

  useEffect(() => {
    const updateSize = () => {
      setDotSize(window.innerWidth < 640 ? 18 : 25);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div id="projects" className="mx-auto max-w-4xl my-[50px] px-4">
      <Heading heading="Projects" />
      <p className="heading-description py-5">Some of the Impacts We’ve Made</p>
      <div className="flex items-start gap-8 my-[10px]">
        {/* INDICATOR COLUMN */}
        <div ref={indicatorRef} className="hidden sm:block relative w-12 flex-shrink-0">
          {/* Gray full line (background) - spans the listHeight */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded"
            style={{
              top: 0,
              height: listHeight || 0,
              backgroundColor: "#E6E6E6",
            }}
          />

          {/* Filled colored line (grows to fillHeight) */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded"
            style={{
              top: 0,
              height: fillHeight || 0,
              backgroundColor: "#008080",
              transition: "height 200ms linear",
            }}
          />

          {/* Dots positioned at centers */}
          {dotPositions.map((pos, i) => {
            const topPx = (pos || 0) - dotSize / 2;
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  const el = itemRefs.current[i];
                  if (el) {
                    const offset =
                      window.innerHeight / 2 -
                      el.getBoundingClientRect().height / 2;
                    window.scrollTo({
                      top:
                        window.scrollY +
                        el.getBoundingClientRect().top -
                        offset,
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label={`Show project ${i + 1}`}
                aria-current={isActive ? "true" : undefined}
                aria-controls={`project-${i}`}
                className="absolute z-20 grid place-items-center rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                style={{
                  left: "50%",
                  top: `${topPx}px`,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: isActive ? "#008080" : "#9CA3AF",
                  border: "2px solid white",
                  transition: "background-color 150ms, transform 150ms",
                  transform: isActive
                    ? "translateX(-50%) scale(1.18)"
                    : "translateX(-50%)",
                }}
              />
            );
          })}
        </div>

        {/* PROJECT LIST */}
        <div ref={listRef} className="flex-1">
          <div className="space-y-16">
            {projects.map((p, i) => (
              <article
                key={i}
                id={`project-${i}`}
                ref={(el) => setItemRef(el, i)}
                className="rounded-2xl bg-white p-6 shadow border-r-4 border-blue"
              >
                <h3 className="text-lg font-semibold text-blue">{p.title}</h3>
                <p className="mt-2 text-grey text-sm leading-relaxed">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
