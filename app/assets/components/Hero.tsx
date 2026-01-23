"use client";

import Image from "next/image";
import Link from "next/link";
import ayaan from "./images/ayaan.png";

export default function Hero() {
  return (
    // bg-[radial-gradient(circle_at_top,#1a1a1a_0%,transparent_55%)]
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 sm:px-12 lg:px-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-48 w-48 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -bottom-12 left-1/3 h-56 w-86 rounded-full bg-amber-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex items-center gap-8">
        <div>
          <h1 className="text-4xl font-base sm:text-5xl lg:text-7xl">
            Code with <br /> Consistency
          </h1>

          <p className="mt-6 max-w-xl text-lg sm:text-xl">
            I craft interactive experiences for forward-thinking teams—from
            product vision to polished launch. Each project balances clarity,
            bold visuals, and motion to keep audiences engaged.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center justify-center gap-3">
              <Link
                href="#work"
                className="bg-black px-7 py-2.5 text-sm font-medium tracking-wider text-white transition hover:bg-white/80"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium tracking-wider transition hover:border-white hover:bg-white/10"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-red-400">
          <Image
            src={ayaan}
            alt="Portrait of Ayaan"
            className="h-full w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
