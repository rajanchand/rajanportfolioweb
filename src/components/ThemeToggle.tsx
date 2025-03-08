
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <button
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-background border border-border shadow-sm hover:shadow-md transition-all duration-300"
      onClick={toggleTheme}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Sun 
          className={`w-5 h-5 transition-all duration-500 ${
            theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          }`} 
        />
        <Moon 
          className={`w-5 h-5 transition-all duration-500 ${
            theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
