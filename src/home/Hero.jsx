import React from "react";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[90vh] w-full flex flex-col items-center justify-center px-4 py-8 sm:px-6 md:px-8">
      <div className="w-full max-w-7xl">
        <p className="text-lg sm:text-xl md:text-2xl text-center">
          Hi, My name is
        </p>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 mt-6 sm:mt-8 justify-center flex-wrap sm:flex-nowrap">
          <div className="hidden sm:block w-8 sm:w-12 md:w-16 lg:w-52 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-black rounded-sm"></div>
          <h1 className="prata-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center whitespace-nowrap">
            Ayaan Murshed Khan
          </h1>{" "}
          <div className="hidden sm:block w-8 sm:w-12 md:w-16 lg:w-52 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-black rounded-sm"></div>
        </div>
      </div>
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 mt-4 sm:mt-6 source-serif px-4 max-w-3xl">
        Welcome to my website ...
      </p>
      <div className="w-full flex justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-10 flex-wrap sm:flex-nowrap px-4">
        <button
          onClick={() => navigate("/projects")}
          className="px-4 sm:px-6 py-1.5 sm:py-2 border-2 border-[#D97757] bg-[#D97757] text-white rounded-sm text-sm sm:text-base hover:bg-[#d97857ea] hover:border-[#d97857ea] transition-colors w-full sm:w-auto"
        >
          Projects
        </button>
        <button
          onClick={() => window.open("/Ayaan_Resume.pdf", "_blank")}
          className="px-4 sm:px-6 py-1.5 sm:py-2 border-2 border-[#030712] rounded-sm flex gap-2 items-center justify-center text-sm sm:text-base hover:bg-gray-100 transition-colors w-full sm:w-auto"
        >
          Resume{" "}
          <FileText
            className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-gray-950"
            strokeWidth={1.5}
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;
