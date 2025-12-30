import React from "react";
import Link from "next/link";
import { quickLinks } from "@/lib/data";
import { getSocials } from "@/src/sanity/queries";
import { client } from "@/src/sanity/client";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
} from "@/lib/icons";

const options = { next: { revalidate: 30 } };

const Footer = async () => {
  const socials = await client.fetch(getSocials, {}, options);

  const getIcon = (value) => {
    const iconSize = 20;
    const icons = {
      LinkedIn: <LinkedInIcon size={iconSize} color="#0A66C2" />,
      X: <XIcon size={iconSize} color="#000000" />,
      Facebook: <FacebookIcon size={iconSize} />,
      TikTok: <TikTokIcon size={iconSize} color="#000000" />,
      Instagram: <InstagramIcon size={iconSize} />,
    };

    return icons[value] || null;
  };

  return (
    <footer className="bg-[#00274D60]">
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
          <div className="flex gap-1.5">
            {socials.map((social) => {
              return (
                <a
                  key={social._id}
                  href={social.link}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-center w-9 h-9 rounded-full border border-gray-300 hover:bg-[#edeef2] hover:text-[#0A66C2] transition-colors duration-300"
                >
                  {getIcon(social.name)}
                </a>
              );
            })}
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
