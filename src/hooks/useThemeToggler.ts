import { useEffect, useState } from "react";

type Themes = "dark" | "light";
const useThemeToggler = () => {
  const [theme, setTheme] = useState<Themes>("dark");
  const change = (theme: Themes) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? "dark";
    if (theme != "dark" && theme != "light") return;
    change(theme);
  }, []);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    change(newTheme);
  };
  return {
    theme,
    change,
    toggle,
  };
};
export default useThemeToggler;
