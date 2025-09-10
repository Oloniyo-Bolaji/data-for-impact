import React from "react";

const InfoCard = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start rounded-[20px] p-6 sm:w-1/2 w-full shadow-[2px_2px_6px_#00274d40] bg-white">
      <h3 className="text-lg font-semibold text-blue">{title}</h3>
      <p className="mt-2 text-grey text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
