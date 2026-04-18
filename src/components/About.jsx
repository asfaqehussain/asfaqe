import { motion } from 'framer-motion';
import {
    FiMapPin, FiMail, FiBriefcase, FiCheckCircle,
    FiCoffee, FiCode, FiZap, FiHeart
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const stats = [
    { icon: FiCode, value: '10+', label: 'Projects' },
    { icon: FiCoffee, value: '4+', label: 'Years Exp' },
    { icon: FiZap, value: '3+', label: 'Technologies' },
    { icon: FiHeart, value: '∞', label: 'Passion' },
];

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-mono text-indigo-500 uppercase tracking-wider">
                        Get to know me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-6">
                    {/* LEFT: Who Am I (3 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="relative h-full glass rounded-3xl p-8 md:p-10 overflow-hidden
                          border border-gray-200/60 dark:border-white/10
                          hover:border-indigo-500/30
                          transition-colors duration-300">

                            {/* Subtle background watermark */}
                            <div className="absolute top-0 right-0 text-[180px] font-bold 
                            text-indigo-500/[0.03] dark:text-indigo-400/[0.04]
                            font-mono leading-none select-none pointer-events-none">
                                {'{}'}
                            </div>

                            {/* Terminal header */}
                            <div className="relative flex items-center gap-2 mb-6 pb-4 border-b border-gray-200 dark:border-white/10">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <span className="ml-2 text-xs font-mono text-gray-500">
                                    ~/about/who-am-i.md
                                </span>
                            </div>

                            {/* Heading */}
                            <div className="relative flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                    <FiCode className="w-5 h-5 text-indigo-500" />
                                </div>
                                <h3 className="text-3xl font-bold">
                                    Who am I?
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="inline-block ml-1 w-1 h-7 bg-indigo-500 align-middle"
                                    />
                                </h3>
                            </div>

                            {/* Bio */}
                            <p className="relative text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
                                {personalInfo.bio}
                            </p>

                            {/* Info chips — no hover movement */}
                            <div className="relative grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 p-3 rounded-xl 
                              bg-gray-50 dark:bg-white/[0.03]
                              border border-gray-200 dark:border-white/10">
                                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-500">
                                        <FiMapPin className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-500 font-mono">LOCATION</p>
                                        <p className="font-semibold truncate">{personalInfo.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 rounded-xl 
                              bg-gray-50 dark:bg-white/[0.03]
                              border border-gray-200 dark:border-white/10">
                                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500">
                                        <FiMail className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs text-gray-500 font-mono">EMAIL</p>
                                        <p className="font-semibold truncate">{personalInfo.email}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats — unified clean look */}
                            <div className="relative grid grid-cols-4 gap-3 pt-6 border-t border-gray-200 dark:border-white/10">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="inline-flex p-2.5 rounded-xl 
                                  bg-indigo-500/10 border border-indigo-500/20 mb-2">
                                            <stat.icon className="w-4 h-4 text-indigo-500" />
                                        </div>
                                        <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
                                        <p className="text-xs text-gray-500 font-mono uppercase">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Current Org (2 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="relative h-full glass rounded-3xl p-8 flex flex-col
                          border border-gray-200/60 dark:border-white/10
                          hover:border-indigo-500/30
                          transition-colors duration-300">

                            {/* Active status badge */}
                            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full 
                            bg-green-500/10 border border-green-500/20 mb-6">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-mono font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
                                    Currently Working
                                </span>
                            </div>

                            {/* Company icon */}
                            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20
                            self-start mb-6">
                                <FiBriefcase className="w-7 h-7 text-indigo-500" />
                            </div>

                            {/* Company info */}
                            <h3 className="text-2xl font-bold mb-1">
                                {personalInfo.currentOrg.name}
                            </h3>
                            <p className="text-indigo-500 font-semibold mb-2">
                                {personalInfo.currentOrg.role}
                            </p>
                            <span className="text-xs font-mono text-gray-500 mb-6">
                                📅 {personalInfo.currentOrg.duration}
                            </span>

                            {/* Responsibilities */}
                            <div className="border-t border-gray-200 dark:border-white/10 pt-6 flex-grow">
                                <p className="text-xs font-semibold mb-4 text-gray-500 uppercase tracking-wider font-mono">
                                    ⚡ Key Responsibilities
                                </p>
                                <ul className="space-y-4">
                                    {personalInfo.currentOrg.responsibilities.map((resp, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.15 }}
                                            className="flex items-start gap-3"
                                        >
                                            <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {resp}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}