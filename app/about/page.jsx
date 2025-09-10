import Header from "@/component/Header";
import React from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/component/About"));
const FounderNote = dynamic(() => import("@/component/FounderNote"));
const Mentor = dynamic(() => import("@/component/Mentor"));

const page = () => {
  return (
    <main>
      <Header heading="Get to know us" />
      <div className="max-w-screen-xl mx-auto lg:px-10 sm:px-10 px-5 my-2">
        <About />
        <FounderNote />
        <Mentor />
      </div>
    </main>
  );
};

export default page;
