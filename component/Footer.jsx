import React from "react";
import Link from "next/link";
import { quickLinks } from "@/lib/data";
import LinkedInIcon from "@/lib/icons/linkedin";

const Footer = () => {
  return (
    <footer className="bg-faintblue">
      <div className="max-w-screen-xl mx-auto flex flex-col px-5 text-blue py-2.5">
        <div className="flex justify-between gap-1 sm:items-center sm:flex-row flex-col py-1.5">
          <div>
            <h3 className="text-base font-bold">Data for Impact</h3>
          </div>
          <div>
            <ul className="flex sm:flex-row flex-col sm:gap-5 gap-1.5 text-[15px]">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:bg-[#edeef2] hover:text-[#0A66C2] transition-colors duration-300"
            >
              <LinkedInIcon size={20} color="#0A66C2" />
            </a>
          </div>
        </div>

        <div className=" text-[13px] flex items-center sm:justify-end py-1.5">
          <h4>
            &copy;{new Date().getFullYear()} Data for Impact. All rights
            reserved
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
