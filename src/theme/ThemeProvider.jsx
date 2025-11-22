import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const THEME_KEY = "theme-preference";

export function ThemeProvider({ children }) {
  // 'system' | 'dark' | 'light'
  const [theme, setTheme] = useState(() => {
    try {
      const raw = localStorage.getItem(THEME_KEY);
      return raw ?? "system";
    } catch (e) {
      return "system";
    }
  });

  // derived value: isDark boolean
  const resolvedIsDark = (() => {
    if (theme === "dark") return true;
    if (theme === "light") return false;
    // system
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  })();

  useEffect(() => {
    // Apply the .dark class to <html> so CSS variables change
    const root = document.documentElement;

    function apply(isDark) {
      if (isDark) root.classList.add("dark");
      else root.classList.remove("dark");
    }

    if (theme === "system") {
      // don't lock theme, but reflect system immediately
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      apply(mql.matches);

      // Listen for system changes
      const handler = (e) => apply(e.matches);
      if (mql.addEventListener) mql.addEventListener("change", handler);
      else mql.addListener(handler);
      return () => {
        if (mql.removeEventListener) mql.removeEventListener("change", handler);
        else mql.removeListener(handler);
      };
    } else {
      apply(theme === "dark");
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const value = { theme, setTheme, resolvedIsDark };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useThemeContext must be used inside ThemeProvider");
  return ctx;
}
