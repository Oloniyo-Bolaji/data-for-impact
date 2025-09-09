"use client";

import dynamic from "next/dynamic";

const PartnersCard = dynamic(() => import("@/CardComponents/PartnersCard"), {
  ssr: false,
});

export default PartnersCard;
