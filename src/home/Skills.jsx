import TheneLine from "../components/TheneLine";

const Skills = () => {
  return (
    <div className="mt-6 sm:mt-8 md:mt-12 pb-8 sm:pb-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 prata-regular flex justify-center items-center gap-3">
        Skills <TheneLine />
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-2 lg:mx-86 md:mt-6">
        <div className="w-fit bg-amber-600 text-gray-900 px-4 py-1.5 rounded-xs hover:opacity-90 transition">HTML</div>
        <div className="w-fit bg-blue-500 text-gray-100 px-4 py-1.5 rounded-xs hover:opacity-90 transition">CSS</div>
        <div className="w-fit bg-amber-300 text-black px-4 py-1.5 rounded-xs hover:opacity-90 transition">Javascript</div>
        <div className="w-fit bg-blue-400 text-white px-4 py-1.5 rounded-xs hover:opacity-90 transition">React</div>
        <div className="w-fit bg-green-600 text-black px-4 py-1.5 rounded-xs hover:opacity-90 transition">Node.js</div>
      </div>
    </div>
  );
};

export default Skills;
