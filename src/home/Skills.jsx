import SkillsIcon from "@/components/Icon";

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Tailwind",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Github",
    "HTML",
    "CSS",
  ];
  return (
    <div className="h-[40vh] mt-6 sm:mt-8 md:mt-10 pb-8 sm:pb-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 lg:mb-10 prata-regular flex justify-center items-center gap-3">
        Skills
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-1 md:gap-1.5 lg:mx-80 md:mt-6 cursor-default">
        {skills.map((skill, index) => (
          <SkillsIcon key={index}>{skill}</SkillsIcon>
        ))}
      </div>
    </div>
  );
};

export default Skills;
