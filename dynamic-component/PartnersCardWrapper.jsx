"use client";

import dynamic from "next/dynamic";

const PartnersCard = dynamic(() => import("@/card-component/PartnersCard"), {
  ssr: false,
});

export default PartnersCard;
