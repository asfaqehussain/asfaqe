import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-3 rounded-full glass hover:shadow-lg 
                 hover:shadow-emerald-500/30 transition-all"
            aria-label="Toggle theme"
        >
            <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? (
                    <FiSun className="w-5 h-5 text-yellow-400" />
                ) : (
                    <FiMoon className="w-5 h-5 text-emerald-600" />
                )}
            </motion.div>
        </motion.button>
    );
}