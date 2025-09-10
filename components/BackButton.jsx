"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/blog");
    }
  };

  return (
    <div>
      <button
        onClick={handleBack}
        aria-label="Back Button"
        className="text-[25px]"
      >
        <ChevronLeft />
      </button>
    </div>
  );
};

export default BackButton;
