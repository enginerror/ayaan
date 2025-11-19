import TheneLine from "../components/TheneLine";
import ProjectCard from "../projects/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="mt-6 sm:mt-8 md:mt-12 pb-8 sm:pb-12">
      <div className="mb-6 sm:mb-8 flex items-center gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold prata-regular flex gap-1">
          Projects <span className="text-lg outfit text-gray-500">16</span>
        </h1>
        <TheneLine />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
