import { ChartNoAxesColumn, History, MemoryStick } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-white to-faintblue h-screen flex items-center"
    >
      {/* Hero Content */}
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 lg:items-center items-center justify-center sm:items-start gap-8 sm:px-10 px-5 h-full">
        {/* Left */}
        <div className="flex flex-col justify-center gap-2.5">
          <h1 className="text-3xl sm:text-6xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Data for <span className="text-teal">Impact</span>
          </h1>
          <p className="mt-4 text-grey sm:text-lg text-base leading-relaxed">
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
        <div className="relative lg:flex hidden justify-center items-end h-full">
          {/* Person Image */}
          <div className="relative w-full max-w-[400px] h-[50vh] sm:h-[60vh] md:h-[80vh] flex items-end">
            <Image
              src="/hero.png"
              alt="Person"
              fill
              quality={100}
              className="object-contain md:object-contain lg:object-cover"
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 400px"
            />
          </div>

          {/* Floating Tags */}
          <div className="sm:top-25 top-15 lg:right-30 sm:right-10 right-5 floats">
            <span>
              <History />
            </span>
            <span>Data Storytelling</span>
          </div>
          <div className="sm:top-60 top-35 lg:right-20 sm:right-10 right-5 floats">
            <span>
              <ChartNoAxesColumn />
            </span>
            <span>Modelling</span>
          </div>
          <div className="sm:bottom-25 bottom-15 lg:right-10 sm:right-5 right-0 floats">
            <span>
              <MemoryStick />
            </span>
            <span> Capacity Building</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
