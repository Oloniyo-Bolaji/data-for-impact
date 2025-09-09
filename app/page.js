import Announcement from "@/components/Announcement";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";

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
}

export default Home;