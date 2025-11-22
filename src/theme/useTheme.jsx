import { useThemeContext } from "./ThemeProvider";

export default function useTheme() {
  const { theme, setTheme, resolvedIsDark } = useThemeContext();

  const toggle = () => {
    setTheme((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return "system";
      return "dark";
    });
  };

  return { theme, setTheme, toggle, resolvedIsDark };
}
