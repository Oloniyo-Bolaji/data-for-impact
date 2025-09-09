import About from "@/components/About";
import FounderNote from "@/components/FounderNote";
import Header from "@/components/Header";
import Mentor from "@/components/Mentor";
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
