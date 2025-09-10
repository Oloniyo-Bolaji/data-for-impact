import React from "react";
import Link from "next/link";
import { quickLinks } from "@/lib/data";
import { ArrowUpFromDot } from "lucide-react";
import LinkedInIcon from "@/lib/icons/linkedin";

const Footer = () => {
  return (
    <footer className="bg-lightblue">
      <div className="max-w-screen-xl mx-auto flex flex-col px-[20px]">
        <div className="flex sm:flex-row flex-col justify-between sm:gap-[100px] gap-[10px] py-[20px] px-[10px]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[20px] text-[#edeef2] font-bold">
              Data for Impact
            </h1>
            <p className="text-[#edeef270] text-[15px]">
              We are a data-driven organization that empowers individuals and
              organizations by building capacity, leveraging advanced analytics,
              AI, and innovation, while translating complex data into actionable
              insights for policy, advocacy, and sustainable impact.
            </p>
            <div className="flex gap-[10px] text-[20px] text-[#edeef2]">
              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:bg-[#0A66C2] hover:text-white transition-colors duration-300"
              >
                <LinkedInIcon size={20} color="#edeef2" />
              </a>
            </div>
          </div>

          <div className="w-full">
            <h5 className="text-[14px] text-[#edeef2] font-bold">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-[5px] text-[#edeef270] text-[14px]">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-[#edeef270] text-[13px] flex items-center justify-center py-[5px]">
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
