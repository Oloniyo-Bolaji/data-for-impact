import Link from "next/link";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="bg-faintblue sm:py-20 py-12">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 flex ">
        <div className="flex flex-col gap-5">
          {/** heading */}
          <div className="flex items-center gap-4 max-w-[300px] mx-auto sm:mx-0">
            <div className="flex-1 border-t border-blue"></div>
            <h2 className="text-blue font-extrabold my-2.5 uppercase sm:text-xl text-lg">
              What We Do
            </h2>
            <div className="flex-1 border-t border-blue"></div>
          </div>

          {/**description */}
          <p className="text-grey leading-8">
            We empower aspiring and practising data professionals with
            bootcamps, mentorship, and real-world projects through our community
            and through our consultancy, we partner with governments, NGOs and
            development organizations to design monitoring systems apply
            advanced analytics and turn data into actionable insights.
          </p>

          {/** CTA */}
          <Link
            href="/expertise"
            aria-label="Learn more about our core services"
            className="inline-flex items-center justify-center w-[150px] rounded-[10px] bg-[#008080]/80 p-[10px] text-[15px] text-white hover:bg-[#008080] transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
