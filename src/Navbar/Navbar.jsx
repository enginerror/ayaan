import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center py-3 sm:py-4">
        <Link to="/" className="prata-regular text-lg sm:text-xl md:text-2xl">
          enginerror
        </Link>
        <div className="flex gap-3 sm:gap-4 items-center">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden p-1 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center py-3 px-4">
          <Link
            to="/"
            className="prata-regular text-lg sm:text-xl"
            onClick={() => setOpen(false)}
          >
            enginerror
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col justify-center h-[calc(100vh-80px)] px-4">
          <Link to="/" onClick={() => setOpen(false)}>
            <div className="text-center text-xl sm:text-2xl uppercase border-t border-gray-300 py-5 hover:bg-black hover:text-white transition-all duration-200">
              Home
            </div>
          </Link>
          <Link to="/projects" onClick={() => setOpen(false)}>
            <div className="text-center text-xl sm:text-2xl uppercase border-t border-gray-300 py-5 hover:bg-black hover:text-white transition-all duration-200">
              Projects
            </div>
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            <div className="text-center text-xl sm:text-2xl uppercase border-t border-gray-300 py-5 hover:bg-black hover:text-white transition-all duration-200">
              About
            </div>
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            <div className="text-center text-xl sm:text-2xl uppercase border-t border-b border-gray-300 py-5 hover:bg-black hover:text-white transition-all duration-200">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
