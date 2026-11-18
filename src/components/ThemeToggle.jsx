import { motion, useReducedMotion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const easeOut = [0.23, 1, 0.32, 1];

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const reduceMotion = useReducedMotion();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="press inline-flex h-11 w-11 items-center justify-center text-fg"
            aria-label="Toggle theme"
        >
            <motion.span
                key={theme}
                initial={{ opacity: reduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, ease: easeOut }}
                className="inline-flex"
            >
                {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </motion.span>
        </button>
    );
}
