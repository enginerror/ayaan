import { Link, useLocation } from "react-router-dom";

const Menubar = () => {
  const location = useLocation();

  return (
    <div className="hidden sm:block">
      <div className="w-full flex justify-center items-center relative">
        <div
          className="flex justify-center items-center border border-white/30 bg-white/20 backdrop-blur-3xl shadow-xl fixed mt-12 sm:mt-14 md:mt-16 px-2 py-2 rounded-full z-40 gap-1"
        >
          <Link to="/">
            <p
              className={`text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 md:px-5 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
                location.pathname === "/"
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
            >
              Home
            </p>
          </Link>

          <Link to="/projects">
            <p
              className={`text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 md:px-5 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
                location.pathname === "/projects"
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
            >
              Projects
            </p>
          </Link>

          <Link to="/dsa">
            <p
              className={`text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 md:px-5 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
                location.pathname === "/dsa"
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
            >
              DSA
            </p>
          </Link>

          <Link to="/dashboard">
            <p
              className={`text-xs sm:text-sm md:text-[14px] px-3 sm:px-4 md:px-5 py-2 rounded-full cursor-pointer uppercase transition-colors duration-200 ${
                location.pathname === "/dashboard"
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
            >
              Dashboard
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
