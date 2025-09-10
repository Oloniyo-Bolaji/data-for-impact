import FAQs from "@/component/FAQs";
import Service from "@/component/Service";
import Testimonials from "@/component/Testimonials";
import React from "react";

const page = () => {
  return (
    <main>
      <Service />
      <Testimonials />
      <FAQs />
    </main>
  );
};

export default page;
