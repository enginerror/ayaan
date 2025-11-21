import ThinLine from "@/components/ThinLine";
import ProjectCard from "@/projects/ProjectCard";
import { LayoutGrid, Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen mt-6 sm:mt-8 md:mt-12 pb-8 sm:pb-12">
      <div className="mb-4 md:mb-5 flex items-center gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold prata-regular flex gap-1.5">
          Projects <span className="text-lg outfit text-gray-500">1</span>
        </h1>
        <ThinLine />
      </div>
      <div className="flex justify-between items-center mb-3 md:mb-4 lg:mb-6 gap-2">
        <div className="flex items-center px-2 py-1 bg-gray-100 border border-gray-200 rounded-full">
          <Search
            className="h-3 w-3 md:h-5 md:w-5 text-gray-400 cursor-pointer"
            strokeWidth={1.5}
          />
          <input
            type="text"
            className="w-[60vw] md:w-full outline-none text-gray-700 px-2"
          />
        </div>
        <div>
          <button
            onClick={() => navigate("/add")}
            className="flex items-center px-2.5 sm:px-3 py-1.5 sm:py-2 bg-[#D97757] text-white gap-0.5 sm:gap-1 rounded-sm text-xs sm:text-sm hover:bg-[#d97857ea] transition-colors"
          >
            <span className="hidden sm:block">New Project</span>
            <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 md:gap-3">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
