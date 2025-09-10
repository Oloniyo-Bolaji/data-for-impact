import { Sparkles } from "lucide-react";
import React from "react";

const Header = ({ heading }) => {
  return (
    <header className="max-w-screen-xl mx-auto sm:px-10 sm:py-5 py-2.5 px-5">
      <div className="bg-faintblue h-[200px] flex-center sm:p-20 p-10 rounded-2xl ">
        <h3 className="relative text-blue capitalize font-semibold border-blue bg-[#00274d20] border p-2.5 rounded-[10px]">
          <span>{heading}</span>
          <span
            className="absolute -top-[10px] left-0 animate-pulse"
            aria-hidden="true"
          >
            <Sparkles />
          </span>
        </h3>
      </div>
    </header>
  );
};

export default React.memo(Header);
