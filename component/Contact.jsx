import { Mail } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 sm:p-8 p-4 shadow-[2px_2px_6px_#00274d40] bg-[#00274d]/30 rounded-2xl">
      <div className="flex-col-center gap-2.5">
        <span className="animate-bounce rounded-sm bg-[#00274d]/30 p-1.5">
          <Mail className=" test-blue" size={40} />
        </span>
        <p>You can send us a message directly</p>
        <a
          href="mailto:contact@dataforimpactng.org"
          className="text-blue font-semibold hover:underline"
        >
          contact@dataforimpactng.org
        </a>
      </div>
    </div>
  );
};

export default Contact;



