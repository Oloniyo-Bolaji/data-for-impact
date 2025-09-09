import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="top" className="bg-gradient-to-b from-white to-faintblue">
      {/* Hero Content */}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-10 sm:px-10 px-5 py-16">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Data for <span className="text-teal">Impact</span>
          </h1>
          <p className="mt-4 text-grey text-lg leading-relaxed">
            We believe data has the power to change lives. At Data for Impact,
            we build skills, develop leaders, and use insights to drive better
            ecisions and sustainable shange for communities across Africa and
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
        <div className="relative flex justify-center">
          {/* Person Image */}
          <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px]">
            <Image
              src="/hero.png"
              alt="Person"
              fill
              className="object-cover rounded-lg filter drop-shadow-[0_15px_20px_#00274d]"
              priority
            />
          </div>

          {/* Floating Tags */}
          <div className="absolute top-10 right-20 text-blue bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium">
            Data Storytelling
          </div>
          <div className="absolute top-40 right-15 text-blue  bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium">
            Modelling
          </div>
          <div className="absolute bottom-16 right-20 text-blue bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium">
            Capacity Building
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
