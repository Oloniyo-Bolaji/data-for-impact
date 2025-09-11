import { Sparkles } from "lucide-react";
import React from "react";

const Header = ({ heading }) => {
  return (
    <header className="max-w-screen-xl mx-auto sm:px-10 py-2.5 px-5">
      <div className="sm:h-[50px] h-[20px] flex-center sm:p-5 p-2.5">
        <h3 className="relative text-blue text-sm capitalize font-medium animate-pulse bg-[#00274d20] p-2 rounded-lg">
          <span>{heading}</span>
          <span
            className="absolute -top-[10px] left-0 animate-pulse"
            aria-hidden="true"
          >
            <Sparkles size={18}/>
          </span>
        </h3>
      </div>
    </header>
  );
};

export default React.memo(Header);
