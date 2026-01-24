"use client";

import Image from "next/image";
import ayaan from "./images/ayaan.png";
import Img from "./images/img2.jpg";
import { Languages } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-full">
      <div className="mt-4 flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-[50px] font-normal leading-[1.1] tracking-tight">
            &nbsp; &nbsp; &nbsp; &nbsp;My name is Ayaan. <br /> I'm a
            <span className="ml-1 text-[#FF2F00]"> Full Stack Developer</span> <br />{" "}
            Based in India (IN).
          </h1>

          <div className="mt-6">
            <p className="text-[20px]">Latest Project</p>
            <div className="w-fit mt-2 p-4 border flex gap-6">
              <div className="border border-black">
                <Image className="h-auto w-52" src={Img} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-gray-600 tracking-tight">
                  AI, Vision, Blockchain Design UI, 2024
                </p>
                <p className="uppercase text-[14px] tracking-tight">
                  Blockchain Graph
                </p>

                <div className="w-fit px-1.5 flex justify-center text-[15px] border rounded-xl uppercase tracking-tighter">
                  All Projects
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image className="h-auto w-80" src={ayaan} alt="" priority />
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <div className="text-2xl uppercase tracking-tight">
          Currently available for Freelance Projects
        </div>

        <div className="border rounded-full p-4">
          <Languages className="h-5 w-5" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
