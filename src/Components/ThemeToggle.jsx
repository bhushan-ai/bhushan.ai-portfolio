// import React, { useEffect, useState } from "react";
// import { Sun, Moon, Monitor } from "lucide-react";

// function ThemeToggle() {
//   const [theme, setTheme] = useState(() => {
//     if (localStorage.theme) return localStorage.theme;
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   });

//   useEffect(() => {
//     if (theme === "system") {
//       localStorage.removeItem("theme");
//       const systemDark = window.matchMedia(
//         "(prefers-color-scheme: dark)"
//       ).matches;
//       document.documentElement.classList.toggle("dark", systemDark);
//     } else {
//       localStorage.theme = theme;
//       document.documentElement.classList.toggle("dark", theme === "dark");
//     }
//   }, [theme]);

//   const nextTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   const icon = theme === "dark" ? <Sun size={20} /> : <Moon size={20} />;

//   return (
//     <button
//       onClick={nextTheme}
//       className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl hover:scale-105 transition"
//       title={`Theme: ${theme}`}
//     >
//       {icon} {theme}
//     </button>
//   );
// }
// export default ThemeToggle;
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme) return localStorage.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl hover:scale-105 transition"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      <span className="capitalize">{theme}</span>
    </button>
  );
}

export default ThemeToggle;
