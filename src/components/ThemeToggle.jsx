import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full 
                 bg-white dark:bg-gray-700 
                 text-gray-800 dark:text-white 
                 shadow-lg transition-all"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
