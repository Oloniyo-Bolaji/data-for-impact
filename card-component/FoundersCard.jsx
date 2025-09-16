import { components } from "@/lib/components";
import { PortableText } from "next-sanity";
import React from "react";

const FoundersCard = ({ note }) => {
  const { content, name, position } = note;
  return (
    <div className="bg-faintblue flex w-full flex-col gap-2 p-6 sm:w-1/2">
      {content && (
        <PortableText value={content} components={components} />
      )}
      <h4 className="font-semibold text-blue text-xl">{name}</h4>
      {position && (
        <h5 className="font-semibold text-grey text-sm">{position}</h5>
      )}
    </div>
  );
};

export default FoundersCard;
