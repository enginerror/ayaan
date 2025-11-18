import { ChevronRight, Code, Link } from "lucide-react";

const ProjectCard = () => {
  return (
    <div className="h-fit w-fit rounded-sm border border-gray-200 p-1">
      <div className="h-60 w-88 rounded-sm bg-gray-200 object-cover overflow-hidden">
        <img src="" alt="" />
      </div>
      <div className="mt-1">
        <p className="text-lg">Ecommerce Website</p>
        <p className="text-sm text-gray-400 -mt-1">Full Stack</p>
      </div>
      <div className="flex mt-1.5 gap-1 flex-wrap">
        <button className="flex items-center px-3 py-1 border-2 border-black bg-black text-white gap-2 rounded-xs">
          Live <Link className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
        <button className="px-3 py-1 border-2 border-black rounded-xs flex gap-2 items-center">
          Code <Code className="h-4 w-4" strokeWidth={2} />
        </button>
        <button className="px-3 py-1 border-2 border-black rounded-xs flex gap-1 items-center">
          Learn More
          <ChevronRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
