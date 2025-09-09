import ServiceCard from "@/CardComponents/ServiceCard";
import { coreServices } from "@/lib/data";
import React from "react";


const Service = () => {

  return (
    <section id="services" className="py-5 bg-faintblue">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="headings">
          Our Core <span className="text-teal">Services</span>
        </h3>
        <div
          className="my-[10px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] sm:px-[50px] px-[15px]"
        >
          {" "}
          {coreServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Service);
