import SkillsIcon from "@/components/SkillIcon";
import ThinLine from "@/components/ThinLine";

const Skills = () => {
  return (
    <div className="h-[40vh] mt-6 sm:mt-8 md:mt-10 pb-8 sm:pb-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10 lg:mb-12 prata-regular flex justify-center items-center gap-3">
        Skills <ThinLine />
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-1.5 lg:mx-86 md:mt-6 cursor-default">
        <SkillsIcon className="bg-[#FC5B23] text-[#F8F4F2]">HTML</SkillsIcon>
        <SkillsIcon className="bg-[#2196F3] text-[#F1F5F8]">CSS</SkillsIcon>
      </div>
    </div>
  );
};

export default Skills;
