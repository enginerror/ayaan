"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const sitemapItems = [
  { label: "Index", href: "/" },
  { label: "About" },
  { label: "Projects [9]", href: "/projects" },
  { label: "Services" },
  { label: "Contact", href: "/contact" },
];

const connectItems = [
  "Resume",
  "Twitter",
  "Instagram",
  "Email",
  "LinkedIn",
  "Dribbble",
];

const toIndianTime = (date: Date) =>
  date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

const Menu = () => {
  const [indianTime, setIndianTime] = useState(() => toIndianTime(new Date()));

  useEffect(() => {
    const updateTime = () => setIndianTime(toIndianTime(new Date()));

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-3 grid grid-cols-1 border-b md:grid-cols-3">
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-600">Name</label>
        <p className="uppercase text-[14px] tracking-tighter leading-4.5">
          <span className="group relative inline-block pb-0.5 cursor-pointer">
            <span className="relative">
              Ayaan Murshed khan
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[0.5px] origin-left scale-x-0 bg-[#FF2F00] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </span>
          </span>
          <sup className="text-[8px] font-medium">TM</sup>, 2026 <br /> GMT+5:30
          ({indianTime}, IST)
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-600">Sitemap</label>
          <p className="uppercase text-[14px] tracking-tighter leading-4.5 cursor-default">
            {sitemapItems.map((item, index) => {
              const isLast = index === sitemapItems.length - 1;
              const needsBreak = item.label === "Projects [9]";

              return (
                <Fragment key={item.label}>
                  <span className="group relative inline-block pb-0.5">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="relative cursor-pointer"
                      >
                        {item.label}
                        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[0.5px] bg-[#FF2F00] origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                      </Link>
                    ) : (
                      <span className="relative cursor-pointer">
                        {item.label}
                        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[0.5px] bg-[#FF2F00] origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                      </span>
                    )}
                  </span>
                  {!isLast &&
                    (needsBreak ? (
                      <>
                        ,<br />
                      </>
                    ) : (
                      ", \u00a0"
                    ))}
                </Fragment>
              );
            })}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-600">Let's connect</label>
          <p className="uppercase text-[14px] tracking-tighter leading-4.5 cursor-default">
            {connectItems.map((item, index) => {
              const isLast = index === connectItems.length - 1;
              const needsBreak = item === "Instagram";

              return (
                <Fragment key={item}>
                  <span className="group relative inline-block pb-0.5">
                    <span className="relative cursor-pointer">
                      {item}
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[0.5px] bg-[#FF2F00] origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                    </span>
                  </span>
                  {!isLast &&
                    (needsBreak ? (
                      <>
                        ,<br />
                      </>
                    ) : (
                      ", \u00a0"
                    ))}
                </Fragment>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
