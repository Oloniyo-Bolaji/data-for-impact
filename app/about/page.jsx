import About from "@/Components/About";
import FounderNote from "@/Components/FounderNote";
import Header from "@/Components/Header";
import Mentor from "@/Components/Mentor";
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
