import InfoCard from "@/card-component/InfoCard";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-5"
      aria-labelledby="about-heading"
    >
      {/* Brief About Text */}
      <h2 id="about-heading" className="headings">
        Who We <span className="text-teal">Are</span>
      </h2>

      <p className="max-w-[600px] text-center text-grey text-sm leading-relaxed">
        Data for Impact (DFI) is both a community and a consultancy dedicated to
        transforming lives through data, artificial intelligence, and digital
        innovation. We equip individuals, organizations, and systems to harness
        the power of data for stronger decisions, resilient health systems, and
        sustainable livelihoods.
      </p>

      {/* Mission & Vision */}
      <div className="flex sm:flex-row flex-col gap-5 mt-5 mb-2.5 w-full">
        {/* Mission */}
        <InfoCard
          title="Our Mission"
          description=" To empower individuals, communities, and systems across health and
            livelihood sectors with data-driven solutions, by designing
            innovative monitoring systems, building local capacity, and applying
            artificial intelligence and digital tools to improve
            decision-making, resilience, and sustainable development."
        />

        {/* Vision */}
        <InfoCard
          title="Our Vision"
          description="To improve lives we may never meet by applying data science,
            artificial intelligence, and digital innovation to drive sustainable
            impact in global health and livelihoods."
        />
      </div>
    </section>
  );
};

export default About;
