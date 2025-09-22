import React from "react";
import { Megaphone } from "lucide-react";

const AnnouncementCard = ({ announcement }) => {
  return (
    <div className="flex justify-center pt-5 ">
      <div className="bg-[#00274D60] rounded-xl py-10 px-6 flex flex-col items-center text-blue gap-5 max-w-5xl w-full">
        <Megaphone className="w-10 h-10 animate-bounce" />
        <p className="text-center text-sm sm:text-base">
          {announcement.newAnnouncement}
        </p>
        {announcement.link && (
          <a
            href={announcement.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register Link"
            className="bg-blue text-white cta-btn hover:bg-lightblue sm:text-sm text-xs"
          >
            Apply Here to Join the Next Cohort
          </a>
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;
