import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-mono text-indigo-500 uppercase tracking-wider">
                        Tech Stack
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="glass rounded-2xl p-6 
                       border border-gray-200/60 dark:border-white/10
                       hover:border-indigo-500/30
                       transition-colors duration-300"
                        >
                            <h3 className="text-lg font-bold mb-4 gradient-text">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-sm px-3 py-1.5 rounded-lg
                             bg-gray-100 dark:bg-white/5
                             text-gray-700 dark:text-gray-300
                             border border-gray-200 dark:border-white/10"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}