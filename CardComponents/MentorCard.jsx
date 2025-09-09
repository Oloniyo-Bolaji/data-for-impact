import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";

const MentorCard = ({ mentor }) => {
  if (!mentor) return null;

  const profileImage = mentor.profilePicture?.asset
    ? urlFor(mentor.profilePicture.asset).url()
    : "/placeholder.png";

  return (
    <article className="flex flex-col items-center text-center gap-3">
      {/* Profile Picture */}
      <div className="sm:w-48 sm:h-48 w-36 h-36 rounded-full bg-gradient-to-b from-teal to-blue p-1.5">
        <div className="relative w-full h-full">
          <Image
            src={profileImage}
            alt={`${mentor.name} profile picture`}
            fill
            sizes="(max-width: 640px) 144px, 192px"
            loading="lazy"
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col items-center gap-1.5">
        <h4 className="font-semibold text-teal text-sm sm:text-base">
          {mentor.name}
        </h4>
        <p className="text-grey text-xs sm:text-sm">{mentor.position}</p>

        {/* LinkedIn */}
        {mentor.linkedIn && (
          <a
            href={mentor.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${mentor.name} LinkedIn Profile`}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors duration-300"
          >
          </a>
        )}
      </div>
    </article>
  );
};

export default React.memo(MentorCard);
