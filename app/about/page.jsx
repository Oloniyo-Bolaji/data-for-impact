import About from "@/component/About";
import FounderNote from "@/component/FounderNote";
import Header from "@/component/Header";
import Mentor from "@/component/Mentor";
import React from "react";

const page = () => {
  return (
    <div>
      <Header heading="Get to know us" />
      <About />
      <FounderNote />
      <Mentor />
    </div>
  );
};

export default page;
