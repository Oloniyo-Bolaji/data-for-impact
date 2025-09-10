import Announcement from "@/Components/Announcement";
import Hero from "@/Components/Hero";
import Metrics from "@/Components/Metrics";
import Partners from "@/Components/Partners";
import WhatWeDo from "@/Components/WhatWeDo";

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