import React from "react";

const SkillsIcon = ({ children, className }) => {
  return (
    <div
      className={`w-fit px-4 py-[5px] rounded-full hover:opacity-90 transition ${className}`}
    >
      {children}
    </div>
  );
};

export default SkillsIcon;
