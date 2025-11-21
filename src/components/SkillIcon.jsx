import React from "react";

const SkillsIcon = ({ children, className }) => {
  return (
    <div
      className={`w-fit px-4 py-[5px] rounded-xs bg-black text-white hover:opacity-88 transition ${className}`}
    >
      {children}
    </div>
  );
};

export default SkillsIcon;
