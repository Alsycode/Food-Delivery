import { useState, useEffect } from "react";
const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDark]);
  
    const toggleDarkMode = () => {
      setIsDark(!isDark);
    };
  
    return (
      <button
        onClick={toggleDarkMode}
        className="relative inline-flex items-center w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none"
        aria-label="Toggle dark mode"
      >
        <span
          className={`inline-block w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow transform transition-transform duration-300 ${
            isDark ? 'translate-x-7' : 'translate-x-0'
          }`}
        >
          <span className="absolute inset-0 flex items-center justify-center text-xs">
            {isDark ? '🌙' : '☀️'}
          </span>
        </span>
      </button>
    );
  };
  export default DarkModeToggle