import React from "react";

const SkillsIcon = ({ children, className }) => {
  return (
    <div
      className={`w-fit px-4 py-[5px] text-sm sm:text-base rounded-xs bg-foreground text-white dark:text-black hover:opacity-88 transition ${className}`}
    >
      {children}
    </div>
  );
};

export default SkillsIcon;
