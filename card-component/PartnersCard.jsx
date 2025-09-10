"use client";

import React from "react";
import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import Marquee from 'react-fast-marquee';


const PartnersCard = ({ sponsors }) => {
  return (
    <Marquee
      speed={60}
      gradient={false}
      pauseOnHover
      className="flex items-center py-5 "
    >
      {sponsors.map((sponsor) => {
        return (
          <div key={sponsor._id} className="rounded-md shadow-[0_2px_5px_#7a7a7a50,0_-2px_5px_#7a7a7a50] flex justify-center items-center w-[200px] h-[100px] mx-[30px]">
            <div className="relative w-24 h-16">
              <Image
                src={urlFor(sponsor.logo.asset).width(200).url()} 
                alt={sponsor.name || "Sponsor logo"}
                loading="lazy"
                fill
                sizes="(max-width: 768px) 100px, 200px" 
                className="object-contain"
              />
            </div>
          </div>
        );
      })}
    </Marquee>
  );
};

export default PartnersCard;
