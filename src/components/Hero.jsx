import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import CursorTrail from './CursorTrail';

export default function Hero() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springX = useSpring(cursorX, { stiffness: 200, damping: 20 });
    const springY = useSpring(cursorY, { stiffness: 200, damping: 20 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        cursorX.set(e.clientX - rect.left);
        cursorY.set(e.clientY - rect.top);
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden cursor-none"
            onMouseMove={handleMouseMove}
        >
            {/* ── Cursor trail canvas (scoped to hero) ── */}
            <CursorTrail />

            {/* ── Spring-animated custom cursor dot ── */}
            <motion.div
                className="pointer-events-none absolute z-30 hidden md:block"
                style={{
                    left: springX,
                    top: springY,
                    x: '-50%',
                    y: '-50%',
                }}
            >
                {/* Outer glowing ring */}
                <div className="w-10 h-10 rounded-full border border-emerald-400/60
                    shadow-[0_0_12px_3px_rgba(16,185,129,0.35)]
                    flex items-center justify-center">
                    {/* Inner dot */}
                    <div className="w-2 h-2 rounded-full bg-emerald-400
                        shadow-[0_0_8px_2px_rgba(16,185,129,0.8)]" />
                </div>
            </motion.div>

            {/* Background blobs */}
            <div className="blob w-96 h-96 bg-emerald-500 top-20 -left-20" />
            <div className="blob w-96 h-96 bg-cyan-500 bottom-20 -right-20" />
            <div className="absolute inset-0 grid-bg" />

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-4 py-2 mb-6 rounded-full glass"
                >
                    <span className="text-sm font-mono">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        Available for opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
                >
                    Hi, I'm{' '}
                    <span className="gradient-text bg-[length:200%_auto] animate-gradient">
                        {personalInfo.name}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
                >
                    {personalInfo.title}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    {personalInfo.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-12"
                >
                    <a
                        href={personalInfo.resumeUrl}
                        download
                        className="group flex items-center gap-2 px-6 py-3 rounded-full 
                     bg-gradient-to-r from-emerald-500 to-cyan-500 text-white
                     font-semibold shadow-lg shadow-emerald-500/30
                     hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105
                     transition-all duration-300"
                    >
                        <FiDownload className="group-hover:animate-bounce" />
                        Resume
                    </a>

                    <a
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full glass
                     font-semibold hover:scale-105 hover:shadow-lg
                     transition-all duration-300"
                    >
                        <FiLinkedin className="text-blue-500" />
                        LinkedIn
                    </a>

                    <a
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full glass
                     font-semibold hover:scale-105 hover:shadow-lg
                     transition-all duration-300"
                    >
                        <FiGithub />
                        GitHub
                    </a>

                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="flex items-center gap-2 px-6 py-3 rounded-full glass
                     font-semibold hover:scale-105 hover:shadow-lg
                     transition-all duration-300"
                    >
                        <FiMail className="text-teal-500" />
                        Contact
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.a
                    href="#projects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, y: { repeat: Infinity, duration: 2 } }}
                    className="inline-block text-gray-500 dark:text-gray-400"
                >
                    <FiArrowDown className="w-6 h-6 mx-auto" />
                    <span className="text-xs mt-2 block">Scroll</span>
                </motion.a>
            </div>
        </section>
    );
}