import { LayoutGrid, Plus, Search } from "lucide-react";
import TheneLine from "../components/TheneLine";
import ProjectCard from "../projects/ProjectCard";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen mt-6 sm:mt-8 md:mt-12 pb-8 sm:pb-12">
      <div className="mb-4 md:mb-5 flex items-center gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold prata-regular flex gap-1.5">
          Projects <span className="text-lg outfit text-gray-500">1</span>
        </h1>
        <TheneLine />
      </div>
      <div className="flex justify-between items-center mb-3 md:mb-4 lg:mb-6">
        <div className="flex items-center px-2 py-1.5 bg-gray-100 border border-gray-300 rounded-lg">
          <Search
            className="h-5 w-5 text-gray-400 cursor-pointer"
            strokeWidth={1.5}
          />
          <input type="text" className="outline-none text-gray-700 px-2" />
        </div>
        <div className="flex gap-3">
          <div className="p-1 sm:p-1.5 bg-gray-200 text-gray-600 rounded-sm transition-colors cursor-pointer">
            <LayoutGrid className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
          </div>

          <button
            onClick={() => navigate("/add")}
            className="flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#D97757] text-white gap-1.5 sm:gap-2 rounded-xs text-xs sm:text-sm hover:bg-gray-800 transition-colors"
          >
            New Project{" "}
            <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
