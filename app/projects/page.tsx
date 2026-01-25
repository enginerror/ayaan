import type { Metadata } from "next";
import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import TextRevel from "../components/TextRevel";

export const metadata: Metadata = {
  title: "Projects | ayaan.me",
  description:
    "Browse highlighted work and case studies by Ayaan Murshed Khan.",
};

export default function Projects() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="m-5 mb-0">
        <Menu />
        <TextRevel>
          <div>
            <h1 className="pt-6 text-[100px] tracking-tight">
              Selected projects
            </h1>
          </div>
          <div className="pb-20 flex justify-end">
            <h1 className="-mt-10 text-[100px] tracking-tight">
              (2022-2026)
            </h1>
          </div>
        </TextRevel>
      </div>
      <ProjectCard />
    </div>
  );
}
