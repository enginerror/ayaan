import { Link } from "react-router-dom";

const FixedNavbar = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="flex justify-center items-center bg-amber-200 fixed mt-16 gap-3 px-3 py-2 rounded-full">
        <Link to="/">
          <p className="text-[15px] px-3 rounded-full cursor-pointer uppercase">
            Home
          </p>
        </Link>

        <Link to="/projects">
          <p className="text-[15px] px-3 rounded-full cursor-pointer uppercase">
            Projects
          </p>
        </Link>

        <Link to="/about">
          <p className="text-[15px] px-3 rounded-full cursor-pointer uppercase">
            About
          </p>
        </Link>

        <Link to="/contact">
          <p className="text-[15px] px-4 rounded-full cursor-pointer uppercase">
            Contact
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FixedNavbar;
