"use client";

import { ChartNoAxesColumn, History, MemoryStick } from "lucide-react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, heroRef);

    return () => ctx.revert(); // clean up animation + ScrollTrigger
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="bg-gradient-to-b from-white to-[#00274D60] min-h-screen flex items-center"
    >
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-8 px-5 sm:px-10 items-center">
        {/* Left */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-blue leading-tight">
            Data for <span className="text-teal">Impact</span>
          </h1>
          <p className="text-grey text-base sm:text-lg md:text-xl leading-relaxed mt-4">
            We believe data has the power to change lives. At Data for Impact,
            we build skills, develop leaders, and use insights to drive better
            decisions and sustainable change for communities across Africa and
            beyond.
          </p>
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <Link
              href="/contact"
              aria-label="Contact Us"
              className="bg-blue text-white cta-btn hover:bg-lightblue"
            >
              Contact Us
            </Link>
            <Link
              href="/expertise"
              aria-label="Take a look at our projects"
              className="border border-gray-400 cta-btn text-gray-700 hover:bg-gray-100"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center items-center w-full h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]">
          {/* Person Image */}
          <Image
            src="/hero1.png"
            alt="Person"
            fill
            quality={80}
            className="object-contain md:object-cover"
            priority
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
          />

          {/* Floating Tags */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-white p-2 rounded-lg shadow-md">
            <History className="text-blue-500" />
            <span className="text-gray-800 text-sm sm:text-base">
              Data Storytelling
            </span>
          </div>
          <div className="absolute top-1/3 right-5 flex items-center gap-2 bg-white p-2 rounded-lg shadow-md">
            <ChartNoAxesColumn className="text-green-500" />
            <span className="text-gray-800 text-sm sm:text-base">
              Modelling
            </span>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white p-2 rounded-lg shadow-md">
            <MemoryStick className="text-teal-500" />
            <span className="text-gray-800 text-sm sm:text-base">
              Capacity Building
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
