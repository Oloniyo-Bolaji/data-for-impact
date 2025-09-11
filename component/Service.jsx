import ServiceCard from "@/card-component/ServiceCard";
import { coreServices } from "@/lib/data";
import React from "react";
import Heading from "./Heading";

const Service = () => {
  return (
    <section
      id="services"
      className="py-5 bg-gradient-to-b from-white to-[#00274d60]"
    >
      <div className="max-w-screen-xl mx-auto">
        <Heading heading=" Our Core Services" />
        <div className="my-[10px] py-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] sm:px-[50px] px-[15px]">
          {coreServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service);
