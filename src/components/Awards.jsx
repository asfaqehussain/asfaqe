import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { awards } from '../data/portfolioData';

export default function Awards() {
    return (
        <section id="awards" className="section-padding relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-mono text-indigo-500 uppercase tracking-wider">
                        Recognition
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Award & <span className="gradient-text">Achievement</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
                </motion.div>

                {awards.length === 1 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="relative glass rounded-3xl p-10 md:p-12 
                          border border-gray-200/60 dark:border-white/10
                          hover:border-indigo-500/30
                          transition-colors duration-300">

                            {/* Subtle corner accents instead of glow */}
                            <div className="absolute top-0 left-0 w-20 h-20 
                            border-t-2 border-l-2 border-indigo-500/30 
                            rounded-tl-3xl" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 
                            border-b-2 border-r-2 border-purple-500/30 
                            rounded-br-3xl" />

                            <div className="flex flex-col items-center text-center">
                                {/* Award icon */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
                                    className="p-5 rounded-2xl 
                           bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 
                           shadow-lg shadow-orange-500/20 mb-6"
                                >
                                    <FiAward className="w-10 h-10 text-white" />
                                </motion.div>

                                {/* Year badge */}
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="inline-block px-4 py-1.5 mb-4 rounded-full 
                           bg-yellow-500/10 border border-yellow-500/20
                           text-sm font-mono text-yellow-600 dark:text-yellow-400"
                                >
                                    🏆 {awards[0].year}
                                </motion.span>

                                {/* Title */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="text-3xl md:text-4xl font-bold mb-3"
                                >
                                    {awards[0].title}
                                </motion.h3>

                                {/* Organization */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="text-lg font-semibold gradient-text mb-6"
                                >
                                    {awards[0].org}
                                </motion.p>

                                {/* Divider */}
                                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent mb-6" />

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
                                >
                                    {awards[0].description}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {awards.map((award, idx) => (
                            <motion.div
                                key={award.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                whileHover={{ y: -4 }}
                                className="glass rounded-2xl p-6 
                         border border-gray-200/60 dark:border-white/10
                         hover:border-indigo-500/30
                         transition-colors duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                                        <FiAward className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                                            <h3 className="text-lg font-bold">{award.title}</h3>
                                            <span className="text-xs font-mono px-2 py-1 rounded-full
                                    bg-indigo-500/10 text-indigo-500">
                                                {award.year}
                                            </span>
                                        </div>
                                        <p className="text-sm text-indigo-500 font-semibold mb-2">{award.org}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {award.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}