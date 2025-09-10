import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-white to-faintblue h-screen flex items-center"
    >
      {/* Hero Content */}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-10 sm:px-10 px-5 h-full">
        {/* Left */}
        <div className="flex flex-col justify-center gap-2.5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Data for <span className="text-teal">Impact</span>
          </h1>
          <p className="mt-4 text-grey text-lg leading-relaxed">
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
              className="bg-blue text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-lightblue transition"
            >
              Contact Us
            </Link>
            <Link
              href="/expertise"
              aria-label="Take a look at our projects"
              className="border border-gray-400 px-6 py-3 rounded-full font-medium text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center items-end h-full">
          {/* Person Image */}
          <div className="relative w-full max-w-[400px] h-[60vh] md:h-[80vh] flex items-end">
            <Image
              src="/hero.png"
              alt="Person"
              fill
              quality={100}
              className="object-contain md:object-cover"
              priority
              sizes="(max-width: 768px) 80vw, 400px"
            />
          </div>

          {/* Floating Tags */}
          <div className="absolute top-25 right-30 text-blue bg-faintblue shadow-md px-4 py-2 rounded-full text-sm font-medium">
            Data Storytelling
          </div>
          <div className="absolute top-60 right-20 text-blue bg-faintblue shadow-md px-4 py-2 rounded-full text-sm font-medium">
            Modelling
          </div>
          <div className="absolute bottom-25 right-20 text-blue bg-faintblue shadow-md px-4 py-2 rounded-full text-sm font-medium">
            Capacity Building
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
