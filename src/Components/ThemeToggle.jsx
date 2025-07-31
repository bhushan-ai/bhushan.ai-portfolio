import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // Default fallback

  // On mount: check and apply saved theme or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1 text-xl px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl hover:scale-105 transition"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      <span className="capitalize">{theme}</span>
    </button>
  );
}

export default ThemeToggle;
