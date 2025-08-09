import { Sun, Moon } from 'lucide-react';
export default function ThemeToggle({ darkMode, setDarkMode }) {
  const handleToggle = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 p-2 rounded-full 
                 bg-white dark:bg-gray-700 
                 text-gray-800 dark:text-white 
                 shadow-lg transition-all"
      aria-label="Toggle Theme"
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
