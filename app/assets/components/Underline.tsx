import React from "react";

interface UnderlineProps {
  isVisible: boolean;
  className?: string;
}

const Underline: React.FC<UnderlineProps> = ({ isVisible, className = "" }) => {
  return (
    <span
      className={`
        absolute left-0 bottom-0 h-0.5 w-full
        bg-[#FF2F00]
        transition-all duration-500 ease-out
        ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
        origin-left
        ${className}
      `}
    />
  );
};

export default Underline;
