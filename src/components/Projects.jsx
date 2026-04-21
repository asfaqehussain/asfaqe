import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiFolder } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import GlowCard from './GlowCard';

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-mono text-emerald-500 uppercase tracking-wider">
                        My Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="h-full"
                        >
                            <GlowCard className="group glass rounded-2xl p-6 h-full flex flex-col
                         border border-gray-200/60 dark:border-white/10
                         transition-colors duration-300">
                                {/* Header with folder icon & links */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-xl bg-emerald-500/10 
                              border border-emerald-500/20
                              group-hover:bg-emerald-500/15
                              transition-colors duration-300">
                                        <FiFolder className="w-6 h-6 text-emerald-500" />
                                    </div>

{/* <div className="flex items-center gap-1">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 rounded-lg text-gray-500 dark:text-gray-400
                             hover:text-emerald-500 hover:bg-emerald-500/10
                             transition-colors duration-200"
                                        aria-label="GitHub"
                                    >
                                        <FiGithub className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 rounded-lg text-gray-500 dark:text-gray-400
                             hover:text-emerald-500 hover:bg-emerald-500/10
                             transition-colors duration-200"
                                        aria-label="Live demo"
                                    >
                                        <FiExternalLink className="w-4 h-4" />
                                    </a>
                                </div> */}
                                </div>

                                {/* Project number */}
                                <span className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-2">
                                    0{idx + 1} / 0{projects.length}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 
                           group-hover:text-emerald-500 
                           transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="border-t border-gray-200 dark:border-white/10 pt-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FiCode className="w-3.5 h-3.5 text-emerald-500" />
                                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                                            Tech Stack
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-mono px-2.5 py-1 rounded-md
                               bg-gray-100 dark:bg-white/5
                               text-gray-700 dark:text-gray-300
                               border border-gray-200 dark:border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}