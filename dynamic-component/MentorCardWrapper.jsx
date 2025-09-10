"use client";

import dynamic from "next/dynamic";

const MentorCard = dynamic(() => import("@/card-component/MentorCard"), {
  ssr: false,
});

export default MentorCard;
