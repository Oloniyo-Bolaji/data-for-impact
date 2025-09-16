import Header from "@/component/Header";
import React from "react";
import About from "@/component/About";
import FounderNote from "@/component/FounderNote";
import dynamic from "next/dynamic";

const Mentor = dynamic(() => import("@/component/Mentor"), {
});

const page = () => {
  return (
    <main className="py-3">
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
