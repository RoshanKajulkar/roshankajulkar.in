import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../icons";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
} as const;

type Theme = (typeof THEME)[keyof typeof THEME];

const ThemeToggle = () => {
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? THEME.DARK
      : THEME.LIGHT;
  };

  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    return stored === THEME.DARK || stored === THEME.LIGHT
      ? stored
      : getSystemTheme();
  };

  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const applyTheme = (mode: Theme) => {
    document.documentElement.classList.toggle(THEME.DARK, mode === THEME.DARK);
    setTheme(mode);
  };

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const stored = localStorage.getItem("theme");
      if (stored === THEME.DARK || stored === THEME.LIGHT) return;
      applyTheme(media.matches ? THEME.DARK : THEME.LIGHT);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-full border border-gray-400 bg-white px-4 py-2 shadow-neutral-800 dark:border-white/20 dark:bg-black"
      aria-label="Toggle Theme"
    >
      {theme === THEME.DARK ? (
        <SunIcon className="h-5 w-5 text-white" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
