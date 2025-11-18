import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between py-3">
      <Link to="/" className="prata-regular text-xl">
        enginerror
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
