import TheneLine from "../components/TheneLine";
import C from "../components/skills/c";
import CPP from "../components/skills/cpp";
import HTML from "../components/skills/html";
import CSS from "../components/skills/css";
import GIT from "../components/skills/git";
import JavaScript from "../components/skills/javascript";
import React from "../components/skills/react";
import Github from "../components/skills/github";
import Tailwind from "../components/skills/tailwind";

const Skills = () => {
  return (
    <div className="mt-6 sm:mt-8 md:mt-10 pb-8 sm:pb-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 lg:mb-12 prata-regular flex justify-center items-center gap-3">
        Skills <TheneLine />
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-1.5 lg:mx-86 md:mt-6 cursor-default">
        <C />
        <CPP />
        <React />
        <JavaScript />
        <Tailwind />
        <GIT />
        <Github />
        <HTML />
        <CSS />
      </div>
    </div>
  );
};

export default Skills;
