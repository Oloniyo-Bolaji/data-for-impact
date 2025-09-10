"use client";

import dynamic from "next/dynamic";

const ShareArticle = dynamic(() => import("@/component/ShareArticle"), {
  ssr: false,
});

export default ShareArticle;
