import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Awards', href: '#awards' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'}`}
        >
            <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold gradient-text"
                >
                    {'<Dev/>'}
                </motion.a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-gray-700 dark:text-gray-300
                         hover:text-indigo-600 dark:hover:text-indigo-400
                         transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 
                               bg-gradient-to-r from-indigo-500 to-purple-500
                               group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg glass"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden glass mt-3 mx-6 rounded-xl p-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-3 px-4 text-gray-700 dark:text-gray-300
                       hover:bg-indigo-500/10 rounded-lg transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
}