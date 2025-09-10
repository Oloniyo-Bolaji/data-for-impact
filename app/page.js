import Announcement from "@/component/Announcement";
import Hero from "@/component/Hero";
import Metrics from "@/component/Metrics";
import Partners from "@/component/Partners";
import WhatWeDo from "@/component/WhatWeDo";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Metrics />
      <WhatWeDo />
      <Partners />
      <Announcement />
    </div>
  );
};

export default Home;
