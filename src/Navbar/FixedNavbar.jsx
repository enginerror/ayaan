import { Link } from "react-router-dom";

const FixedNavbar = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="flex justify-center items-center border border-gray-200 fixed mt-16 rounded-full">
        <Link to="/">
          <p className="text-[14px] px-4 py-2 rounded-full cursor-pointer uppercase hover:bg-black hover:text-white">
            Home
          </p>
        </Link>

        <Link to="/projects">
          <p className="text-[14px] px-4 py-2 rounded-full cursor-pointer uppercase">
            Projects
          </p>
        </Link>

        <Link to="/about">
          <p className="text-[14px] px-4 py-2 rounded-full cursor-pointer uppercase">
            About
          </p>
        </Link>

        <Link to="/contact">
          <p className="text-[14px] px-4 py-2 rounded-full cursor-pointer uppercase hover:bg-black hover:text-white">
            Contact
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FixedNavbar;
