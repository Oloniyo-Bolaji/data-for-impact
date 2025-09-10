"use client";

import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <article className="w-full h-full rounded-2xl bg-[rgba(122,122,122,0.31)] shadow-[0_2px_2px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-[rgba(122,122,122,0.3)]">
      <div className="w-full h-full rounded-2xl bg-white p-5 flex flex-col gap-2.5">
        <div className="flex">
          <span
            style={{ color: service.color }}
            className="border border-solid rounded-sm p-2.5 text-[20px]"
            aria-hidden="true"
          >
            {service.icons}
          </span>
        </div>

        <div className="flex flex-col gap-2.5 px-2.5">
          <h2 className="font-semibold text-[15px] text-blue">
            {service.service}
          </h2>
          <p className="text-grey text-[13px] leading-relaxed">{service.description}</p>
        </div>
      </div>
    </article>
  );
};

export default React.memo(ServiceCard);
