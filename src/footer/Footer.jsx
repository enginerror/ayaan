import { Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full mt-6 sm:mt-8 md:mt-12 p-6 bg-gray-200 border border-gray-300 flex justify-between">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <Link to="/" className="text-2xl prata-regular mr-2 lg:mr-4">
          enginerror
        </Link>{" "}
        <span className="hidden sm:block">|</span> <p className="ml lg:ml-4 text-gray-600 text-sm lg:text-lg">copyright &#169;</p>
      </div>

      <div className="flex gap-4">
        <Link to="https://github.com/enginerror">
          <Github className="h-5 w-5" strokeWidth={2} />
        </Link>
        <Link to="https://www.linkedin.com/in/ayaan-murshed-khan/">
          <Linkedin className="h-5 w-5" strokeWidth={2} />
        </Link>
        <Link to="https://www.instagram.com/enginerror/">
          <Instagram className="h-5 w-5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
