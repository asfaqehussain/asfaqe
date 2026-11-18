import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
];

const easeOut = [0.23, 1, 0.32, 1];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('');
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const nodes = navLinks
            .map((link) => document.getElementById(link.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        );

        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, []);

    const linkClass = (id) =>
        `inline-flex min-h-11 items-center text-sm transition-colors duration-150 ${
            active === id ? 'text-fg' : 'text-muted hover:text-fg'
        }`;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 ${
                scrolled
                    ? 'border-b border-line bg-[color-mix(in_srgb,var(--bg)_78%,transparent)] backdrop-blur-xl'
                    : 'bg-transparent'
            }`}
        >
            <nav className="shell flex h-16 items-center justify-between">
                <a href="#home" className="inline-flex min-h-11 items-center text-base font-semibold tracking-tight">
                    Asfaqe
                </a>

                <ul className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.href} className={linkClass(link.id)} aria-current={active === link.id ? 'true' : undefined}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-1">
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="inline-flex h-11 w-11 items-center justify-center text-fg md:hidden"
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <motion.div
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateY(-8px)' }}
                    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="shell origin-top pb-4 md:hidden"
                    style={{ transformOrigin: 'top' }}
                >
                    <ul className="border-t border-line pt-2">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`${linkClass(link.id)} w-full`}
                                    aria-current={active === link.id ? 'true' : undefined}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </header>
    );
}
