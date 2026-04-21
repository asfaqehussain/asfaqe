import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { experience } from '../data/portfolioData';
import GlowCard from './GlowCard';

export default function Experience() {
    return (
        <section id="experience" className="section-padding relative">
            <div className="max-w-4xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-mono text-emerald-500 uppercase tracking-wider">
                        My Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent" />

                    <div className="space-y-8">
                        {experience.map((job, idx) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative flex gap-6 md:gap-10"
                            >
                                {/* Timeline dot */}
                                <div className="relative flex-shrink-0 flex flex-col items-center">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 z-10
                                        ${job.current
                                            ? 'bg-emerald-500/20 border-emerald-500 shadow-lg shadow-emerald-500/20'
                                            : 'bg-gray-100/80 dark:bg-white/5 border-gray-200 dark:border-white/10'
                                        }`}
                                    >
                                        <FiBriefcase className={`w-5 h-5 md:w-6 md:h-6 ${job.current ? 'text-emerald-500' : 'text-gray-400 dark:text-gray-500'}`} />
                                    </div>
                                </div>

                                {/* Card */}
                                <GlowCard className="flex-1 glass rounded-2xl p-6 md:p-8
                                    border border-gray-200/60 dark:border-white/10
                                    transition-colors duration-300 mb-2"
                                >
                                    {/* Top row */}
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold">{job.company}</h3>
                                            <p className="text-emerald-500 font-semibold mt-0.5">{job.role}</p>
                                        </div>

                                        {job.current && (
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                                bg-green-500/10 border border-green-500/20 self-start">
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-xs font-mono font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
                                                    Current
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Meta chips */}
                                    <div className="flex flex-wrap gap-3 mb-5">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-mono
                                            text-gray-500 bg-gray-100 dark:bg-white/5
                                            border border-gray-200 dark:border-white/10
                                            px-2.5 py-1 rounded-lg">
                                            <FiCalendar className="w-3.5 h-3.5" />
                                            {job.duration}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-mono
                                            text-gray-500 bg-gray-100 dark:bg-white/5
                                            border border-gray-200 dark:border-white/10
                                            px-2.5 py-1 rounded-lg">
                                            <FiMapPin className="w-3.5 h-3.5" />
                                            {job.location}
                                        </span>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-2.5">
                                        {job.highlights.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.15 + i * 0.08 }}
                                                className="flex items-start gap-3"
                                            >
                                                <FiCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {point}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
