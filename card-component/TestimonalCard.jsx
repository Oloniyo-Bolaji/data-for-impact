import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";

const TestimonalCard = ({ testimonial, className = "" }) => {
  const { picture, name, location, testimony } = testimonial || {};

  return (
    <figure className="relative mx-12 mt-12 w-[350px]">
      {/* Background layers using pseudo-elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 rotate-[-6deg] rounded-xl bg-blue" />
        <div className="absolute inset-0 rotate-[6deg] rounded-xl bg-grey" />
      </div>

      {/* Main card */}
      <figcaption className="relative z-10 rounded-xl bg-faintblue p-6 text-black shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-black">
            <Image
              src={picture ? urlFor(picture).url() : "/user.png"}
              alt={name || "User"}
              fill
              sizes="32px"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col text-xs leading-tight">
            <span className="font-semibold text-teal">{name}</span>
            <span className="text-grey">{location}</span>
          </div>
        </div>

        {testimony && (
          <p className="mt-3 text-sm font-medium leading-5">{testimony}</p>
        )}
      </figcaption>
    </figure>
  );
};

export default TestimonalCard;
