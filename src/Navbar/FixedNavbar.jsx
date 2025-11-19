import { Link, useLocation } from "react-router-dom";

const FixedNavbar = () => {
  const location = useLocation();
  
  return (
    <div className="hidden sm:block">
      <div className="w-full flex justify-center items-center relative">
        <div className="flex justify-center items-center border border-gray-200 bg-white/80 backdrop-blur-sm fixed mt-12 sm:mt-14 md:mt-16 rounded-full shadow-sm z-40">
          <Link to="/">
            <p className={`text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 md:px-5 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
              location.pathname === "/" ? "bg-black text-white" : "hover:bg-gray-200 hover:text-black"
            }`}>
              Home
            </p>
          </Link>

          <Link to="/projects">
            <p className={`text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 md:px-5 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
              location.pathname === "/projects" ? "bg-black text-white" : "hover:bg-gray-200 hover:text-black"
            }`}>
              Projects
            </p>
          </Link>

          <Link to="/about">
            <p className={`text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 md:px-5 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
              location.pathname === "/about" ? "bg-black text-white" : "hover:bg-gray-200 hover:text-black"
            }`}>
              About
            </p>
          </Link>

          <Link to="/contact">
            <p className={`text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 md:px-5 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
              location.pathname === "/contact" ? "bg-black text-white" : "hover:bg-gray-200 hover:text-black"
            }`}>
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FixedNavbar;
