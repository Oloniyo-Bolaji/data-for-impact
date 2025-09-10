import dynamic from "next/dynamic";
import Hero from "@/component/Hero";
import Metrics from "@/component/Metrics";
import WhatWeDo from "@/component/WhatWeDo";

const Partners = dynamic(() => import("@/component/Partners"));
const Announcement = dynamic(() => import("@/component/Announcement"));
const Reviews = dynamic(() => import("@/component/Reviews"));

const Home = () => {
  return (
    <main>
      <Hero />
      <Metrics />
      <WhatWeDo />
      <Partners />
      <Announcement />
      <Reviews />
    </main>
  );
};

export default Home;