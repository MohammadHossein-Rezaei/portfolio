import { useTheme } from "../../Context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-sm transition-colors duration-300"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
