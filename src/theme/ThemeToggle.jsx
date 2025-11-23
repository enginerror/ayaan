import React, { useState, useEffect, useRef } from "react";
import useTheme from "./useTheme";
import { Monitor, Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setOpen(false);
  };

  const getThemeDisplay = () => {
    switch (theme) {
      case "light":
        return (
          <>
            <Sun className="h-3.5 sm:h-4 w-3.5 sm:w-4" strokeWidth={2} />
            <span>Light</span>
          </>
        );
      case "dark":
        return (
          <>
            <Moon className="h-3.5 sm:h-4 w-3.5 sm:w-4" strokeWidth={2} />
            <span>Dark</span>
          </>
        );
      case "system":
        return (
          <>
            <Monitor className="h-3.5 sm:h-4 w-3.5 sm:w-4" strokeWidth={2} />
            <span>System</span>
          </>
        );
      default:
        return <span>Select Theme</span>;
    }
  };

  return (
    <div>
      <div className="relative inline-block text-left" ref={menuRef}>
        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="px-2 sm:px-3 py-1.5 sm:py-2 bg-black text-white rounded-md text-xs sm:text-sm flex items-center gap-2"
        >
          {getThemeDisplay()}
        </button>

        {/* Menu */}
        {open && (
          <div className="absolute right-0 mt-2 w-26 sm:w-35 bg-background shadow-lg rounded-md border border-muted-border overflow-hidden">
            <ul>
              <li
                onClick={() => handleThemeChange("light")}
                aria-pressed={theme === "light"}
                title="Light"
                className="px-3 sm:px-4 py-2 hover:bg-secondary-foreground cursor-pointer text-xs sm:text-sm flex items-center gap-2 border-b border-muted-border"
              >
                Light{" "}
                <Sun className="h-3.5 sm:h-4 w-3.5 sm:w-4" strokeWidth={2} />
              </li>
              <li
                onClick={() => handleThemeChange("dark")}
                aria-pressed={theme === "dark"}
                title="Dark"
                className="px-3 sm:px-4 py-2 hover:bg-secondary-foreground cursor-pointer text-xs sm:text-sm flex items-center gap-2 border-b border-muted-border"
              >
                Dark{" "}
                <Moon className="h-3.5 sm:h-4 w-3.5 sm:w-4" strokeWidth={2} />
              </li>
              <li
                onClick={() => handleThemeChange("system")}
                aria-pressed={theme === "system"}
                title="Use system preference"
                className="px-3 sm:px-4 py-2 hover:bg-secondary-foreground cursor-pointer text-xs sm:text-sm flex items-center gap-2"
              >
                System{" "}
                <Monitor className="h-3.5 sm:h-4 w-3.5 sm:w-4" strokeWidth={2} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
