import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-base)]"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-[var(--text-color)]" />
      ) : (
        <Sun className="w-5 h-5 text-[var(--text-color)]" />
      )}
    </button>
  );
}
