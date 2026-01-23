"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type MenuLink = {
  path: string;
  label: string;
};

const menuLinks: MenuLink[] = [
  { path: "#", label: "Home" },
  { path: "#", label: "About" },
  { path: "#", label: "Projects" },
  { path: "#", label: "Contact" },
  { path: "#", label: "Blogs" },
];

const Menu: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(
          ".menu-link-item-holder",
          {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
          },
          "-=0.75",
        );
    },
    { scope: container },
  );

  useEffect(() => {
    if (!tl.current) return;

    isMenuOpen ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]);

  return (
    <div ref={container}>
      {/* MENU BAR */}
      <div className="px-8 py-4 fixed top-0 left-0 z-10 flex w-full items-center justify-end">
        <button onClick={toggleMenu}>
          Menu
        </button>
      </div>

      {/* OVERLAY */}
      <div
        className="menu-overlay fixed top-0 left-0 z-20 flex h-screen w-full bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        }}
      >
        {/* LEFT */}
        <div className="p-6 hidden flex-2 items-end cursor-pointer lg:flex">
          <p className="text-[100px] leading-[70%] text-black font-light">
            &#x2715;
          </p>
        </div>

        {/* CENTER */}
        <div className="flex flex-4 flex-col justify-between pt-32 lg:pt-8">
          {/* TOP BAR */}
          <div className="px-8 py-4 fixed top-0 left-0 flex w-full items-center justify-end">
            <button onClick={toggleMenu} className="text-black">
              Close
            </button>
          </div>

          {/* LINKS */}
          <div>
            {menuLinks.map((link, index) => (
              <div key={index} className="overflow-hidden w-max">
                <div
                  className="menu-link-item-holder relative cursor-pointer"
                  onClick={toggleMenu}
                >
                  <Link
                    href={link.path}
                    className="block text-black text-[60px] lg:text-[80px] font-normal leading-[85%] tracking-tight"
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* INFO */}
          <div className="py-6 flex gap-8">
            <div className="flex flex-1 flex-col justify-end gap-2">
              <a href="#">X ↗</a>
              <a href="#">Instagram ↗</a>
              <a href="#">LinkedIn ↗</a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-6 flex flex-4 items-end justify-end">
          <p>Resume</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
