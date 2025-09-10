"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/expertise", label: "DFI's Expertise" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => setShowMenu((prev) => !prev), []);
  const closeMenu = useCallback(() => setShowMenu(false), []);

  return (
    <nav className="h-[70px] sm:w-full w-full flex justify-between items-center fixed top-0 left-0 z-[1000] sm:px-10 px-5 py-[0] bg-white/5 backdrop-blur-sm shadow-md ">
      <div className="sm:px-[10px]">
        <Image
          src="/datalogo.jpg"
          alt="logo"
          width={40}
          height={40}
          priority
          quality={70}
          className="w-full h-auto object-contain rounded-full"
        />
      </div>
      <div className="sm:hidden block text-[25px]" onClick={toggleMenu}>
        {showMenu ? <X /> : <Menu />}
      </div>
      <div
        className={`${showMenu ? "block absolute top-[60px] left-0 w-full z-[1000] overflow-hidden opacity-100 scale-y-100 transition-all duration-500 ease-in-out" : "sm:block hidden"}`}
        onClick={closeMenu}
      >
        <ul
          className={`flex capitalize sm:flex-row text-[20px] sm:gap-[20px] list-none text-blue font-[500] ${showMenu ? "flex flex-col gap-[10px] justify-center items-center p-[10px] bg-white" : ""}`}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[16px] px-2 py-[10px] ${
                  pathname === href ? "border-b-2 border-blue" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
