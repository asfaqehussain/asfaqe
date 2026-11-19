import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { experience } from '../data/portfolioData';
import MaskText from './MaskText';
import Reveal from './Reveal';

export default function Experience() {
    const listRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: listRef,
        offset: ['start 80%', 'end 40%'],
    });
    const scale = useTransform(scrollYProgress, [0, 1], ['scaleY(0)', 'scaleY(1)']);

    return (
        <section id="experience" className="scroll-mt-20 py-16 md:py-24">
            <div className="shell">
                <Reveal>
                    <p className="text-sm text-signal">Career</p>
                </Reveal>
                <MaskText className="mt-2 font-display text-3xl font-semibold leading-[1.15] md:text-4xl">
                    Experience
                </MaskText>

                <ol ref={listRef} className="relative mt-10 space-y-4">
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top bg-line"
                        style={{ transform: reduceMotion ? 'scaleY(1)' : scale, transformOrigin: 'top' }}
                    />
                    {experience.map((job, index) => (
                        <li key={job.id}>
                            <Reveal delay={index * 0.05} className="panel grid gap-4 p-5 md:grid-cols-[auto_1fr] md:p-7">
                            <div className="flex h-16 w-40 items-center justify-center rounded-xl bg-white px-3">
                                <img
                                    src={job.logo}
                                    alt=""
                                    className="max-h-12 max-w-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                                        <p className="mt-1 flex items-center gap-2 text-base">
                                            {job.current && (
                                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                                            )}
                                            {job.role}
                                        </p>
                                    </div>
                                    <p className="text-sm text-muted">
                                        {job.duration}, {job.location}
                                    </p>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {job.highlights.map((point) => (
                                        <li key={point} className="text-sm leading-relaxed text-muted">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
