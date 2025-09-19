"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";

const GraduatesCard = ({ graduates }) => {
  return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="w-full max-w-md">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          grabCursor={true}
        >
          {graduates.map((graduate, index) => (
            <SwiperSlide key={graduate._id || index}>
              {graduate.picture && (
                <div className="relative h-[300px] w-[200px] overflow-hidden mx-auto">
                  <Image
                    src={urlFor(graduate.picture.asset).url()}
                    alt={graduate.name || "Graduate"}
                    priority
                    fill
                    sizes="auto"
                    className="mx-auto rounded-lg object-cover"
                  />
                </div>
              )}
              <div className="flex-col-center gap-[5px]">
                <h1 className="text-blue text-[20px] font-bold">
                  {graduate.name}
                </h1>
                <h4 className="text-[15px]">{graduate.cohort}</h4>
                {graduate.location && (
                  <h3 className="text-grey text-[14px]">{graduate.location}</h3>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GraduatesCard;
