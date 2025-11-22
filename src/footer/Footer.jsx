import { Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full mt-6 sm:mt-8 md:mt-12 p-6 bg-gray-200 border border-gray-300 flex justify-between items-center">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <Link to="/" className="text-lg sm:text-xl md:text-2xl prata-regular mr-2 lg:mr-4">
          enginerror
        </Link>{" "}
        <span className="hidden sm:block">|</span> <p className="lg:ml-4 text-gray-600 text-sm lg:text-lg">copyright &#169;</p>
      </div>

      <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
        <Link to="https://github.com/enginerror" className="p-2 bg-black rounded-xs">
          <Github className="h-4 sm:h-5 w-4 sm:w-5 text-gray-200" strokeWidth={2} />
        </Link>
        <Link to="https://www.linkedin.com/in/ayaan-murshed-khan/" className="p-2 bg-black rounded-xs">
          <Linkedin className="h-4 sm:h-5 w-4 sm:w-5 text-gray-200" strokeWidth={2} />
        </Link>
        <Link to="https://www.instagram.com/enginerror/" className="p-2 bg-black rounded-xs">
          <Instagram className="h-4 sm:h-5 w-4 sm:w-5 text-gray-200" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
