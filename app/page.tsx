"use client";

import Hero from "./assets/components/Hero";
import Marquee from "./assets/components/Marquee";
import Menu from "./assets/components/Menu";
import ProjectCard from "./assets/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <Marquee />
      <ProjectCard />
    </>
  );
}
