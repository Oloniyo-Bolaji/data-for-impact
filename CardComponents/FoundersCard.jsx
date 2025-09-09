import { components } from "@/lib/components";
import { PortableText } from "next-sanity";
import React from "react";

const FoundersCard = ({ note }) => {
  const { content, name, position } = note;
  return (
    <div className="bg-faintblue flex w-full flex-col gap-3 p-6 sm:w-1/2">
      <h3 id="founder-heading" className="headings">
        From the Founder's Desk
      </h3>
      {note.content && (
        <PortableText value={note.content} components={components} />
      )}
      <h3 className="font-semibold text-blue text-xl">{note.name}</h3>
      {note.position && (
        <h4 className="font-semibold text-grey text-lg">{note.position}</h4>
      )}
    </div>
  );
};

export default FoundersCard;
