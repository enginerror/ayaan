import { ChevronRight, Code, Link } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="h-fit w-full rounded-lg border border-gray-200 p-2">
      <div className="h-48 sm:h-52 md:h-56 lg:h-60 w-full rounded-md bg-gray-200 object-cover overflow-hidden">
        <img src="https://images.pexels.com/photos/3426868/pexels-photo-3426868.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="mt-1 sm:mt-2">
        <p className="text-base sm:text-lg font-semibold">Ecommerce Website</p>
        <p className="text-xs sm:text-sm text-gray-400 -mt-0.5 sm:-mt-1">
          Full Stack
        </p>
      </div>
      <div className="flex mt-2 sm:mt-2.5 gap-1.5 sm:gap-2 flex-wrap">
        <button className="flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 border-black bg-black text-white gap-1.5 sm:gap-2 rounded-md text-xs sm:text-sm hover:bg-gray-800 transition-colors">
          Live <Link className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
        </button>
        <button className="px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 border-black rounded-md flex gap-1.5 sm:gap-2 items-center text-xs sm:text-sm hover:bg-gray-100 transition-colors">
          Code <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
        </button>
        <button className="px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 border-black rounded-md flex gap-1 sm:gap-1.5 items-center text-xs sm:text-sm hover:bg-gray-100 transition-colors">
          Learn More
          <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
