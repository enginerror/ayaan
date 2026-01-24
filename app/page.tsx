"use client";

import Hero from "./assets/components/Hero";
import Marquee from "./assets/components/Marquee";
import Menu from "./assets/components/Menu";
import ProjectCard from "./assets/components/ProjectCard";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -bottom-12 left-1/3 h-56 w-86 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="relative m-5 mb-0">
        <Menu />
        <Hero />
      </div>
      {/* <Marquee />
      <ProjectCard /> */}
    </div>
  );
}
