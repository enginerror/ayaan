import { Code, Link } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="h-fit w-full flex justify-between rounded-md border border-gray-200 p-2 md:p-2.5">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-normal">
            Ecommerce Website
          </p>
          <p className="text-xs px-1.5 rounded-xs text-green-700 bg-green-100 border border-green-200">
            Basic
          </p>
        </div>

        <p className="text-sm text-gray-400 font-base">
          Full Stack
        </p>

        <div className="flex gap-1 mt-1 md:mt-2">
          <p className="w-fit px-2 text-xs sm:text-sm rounded-full text-gray-500 bg-gray-50 border border-gray-200">
            React
          </p>
          <p className="w-fit px-2 text-xs sm:text-sm rounded-full text-gray-500 bg-gray-50 border border-gray-200">
            JavaScript
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <button className="w-full flex justify-center items-center px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 border-black bg-black text-white gap-1.5 sm:gap-2 rounded-xs text-xs sm:text-sm hover:bg-gray-800 transition-colors">
          Live <Link className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
        </button>
        <button className="w-full justify-center px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 border-black rounded-xs flex gap-1.5 sm:gap-2 items-center text-xs sm:text-sm hover:bg-gray-100 transition-colors">
          Code <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
