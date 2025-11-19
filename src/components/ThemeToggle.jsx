import { Sun } from "lucide-react";

const ThemeToggle = () => {
  return (
    <button
      className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
    </button>
  );
};

export default ThemeToggle;
