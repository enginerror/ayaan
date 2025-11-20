import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/theme/ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center py-3 sm:py-4">
        <Link to="/" className="prata-regular text-lg sm:text-xl md:text-2xl flex items-center gap-2">
          <div className="hidden sm:block w-4 sm:w-6 md:w-8 lg:w-10 h-[1.5px] bg-black rounded-sm"></div> enginerror
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
            <div className="text-center text-xl sm:text-2xl uppercase border-t border-gray-300 py-3 hover:bg-black hover:text-white transition-all duration-200">
              Home
            </div>
          </Link>
          <Link to="/projects" onClick={() => setOpen(false)}>
            <div className="text-center text-xl sm:text-2xl uppercase border-t border-gray-300 py-3 hover:bg-black hover:text-white transition-all duration-200">
              Projects
            </div>
          </Link>
          <Link to="/dsa" onClick={() => setOpen(false)}>
            <div className="text-center text-xl sm:text-2xl uppercase border-t border-gray-300 py-3 hover:bg-black hover:text-white transition-all duration-200">
              DSA
            </div>
          </Link>
          <Link to="/dashboard" onClick={() => setOpen(false)}>
            <div className="text-center text-xl sm:text-2xl uppercase border-t border-b border-gray-300 py-3 hover:bg-black hover:text-white transition-all duration-200">
              Dashboard
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
