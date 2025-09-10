"use client";

import dynamic from "next/dynamic";

const ShareArticle = dynamic(() => import("@/Components/ShareArticle"), {
  ssr: false,
});

export default ShareArticle;
