import InfoCard from "@/card-component/InfoCard";
import React from "react";
import Heading from "./Heading";

const About = () => {
  const infos = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "To empower individuals, communities, and systems across health and livelihood sectors with data-driven solutions, by designing innovative monitoring systems, building local capacity, and applying artificial intelligence and digital tools to improve decision-making, resilience, and sustainable development.",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "To improve lives we may never meet by applying data science, artificial intelligence, and digital innovation to drive sustainable impact in global health and livelihoods.",
    },
  ];
  
  return (
    <section
      id="about"
      className="flex flex-col items-center"
      aria-labelledby="about-heading"
    >
      {/* Brief About Text */}
      <Heading heading="Who We Are" id="about-heading" />
      <p className="max-w-[600px] text-center text-grey text-sm leading-relaxed py-5">
        Data for Impact (DFI) is both a community and a consultancy dedicated to
        transforming lives through data, artificial intelligence, and digital
        innovation. We equip individuals, organizations, and systems to harness
        the power of data for stronger decisions, resilient health systems, and
        sustainable livelihoods.
      </p>

      {/* Mission & Vision */}
      <div className="flex sm:flex-row flex-col gap-5 my-5 w-full">
        {infos.map((info) => (
          <InfoCard key={info.id} {...info} />
        ))}
      </div>
    </section>
  );
};

export default About;
