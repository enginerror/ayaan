import { Link, useLocation } from "react-router-dom";

const Menubar = () => {
  const location = useLocation();

  return (
    <div className="hidden sm:block">
      <div className="w-full flex justify-center items-center relative">
        <div
          className="flex justify-center items-center border border-white/30 bg-white/20 backdrop-blur-3xl shadow-xl fixed mt-12 sm:mt-14 md:mt-16 p-1.5 rounded-full z-40 gap-0 md:gap-1"
        >
          <Link to="/">
            <p
              className={`text-xs sm:text-sm md:text-[14px] px-2 sm:px-3 md:px-4 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
                location.pathname === "/"
                  ? "bg-black text-white"
                  : "hover:bg-secondary-foreground"
              }`}
            >
              Home
            </p>
          </Link>

          <Link to="/projects">
            <p
              className={`text-xs sm:text-sm md:text-[14px] px-2 sm:px-3 md:px-4 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
                location.pathname === "/projects"
                  ? "bg-black text-white"
                  : "hover:bg-secondary-foreground"
              }`}
            >
              Projects
            </p>
          </Link>

          <Link to="/dsa">
            <p
              className={`text-xs sm:text-sm md:text-[14px] px-2 sm:px-3 md:px-4 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
                location.pathname === "/dsa"
                  ? "bg-black text-white"
                  : "hover:bg-secondary-foreground"
              }`}
            >
              DSA
            </p>
          </Link>

          <Link to="/courses">
            <p
              className={`text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 md:px-5 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 bg-[#D97757] text-white ${
                location.pathname === "/courses"
                  ? "bg-black text-white"
                  : "hover:bg-secondary-foreground"
              }`}
            >
              Courses
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
