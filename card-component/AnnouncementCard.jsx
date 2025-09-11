import React from "react";
import { Megaphone } from "lucide-react";

const AnnouncementCard = ({ announcement }) => {
  return (
    <div className="flex justify-center pt-5 ">
      <div className="bg-faintblue rounded-xl py-10 px-6 flex flex-col items-center text-blue gap-5 max-w-5xl w-full">
        <Megaphone className="w-10 h-10 animate-bounce" />
        <p className="text-center text-lg md:text-xl">{announcement}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
