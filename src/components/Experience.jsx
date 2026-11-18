import { experience } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-20 py-16 md:py-24">
            <div className="shell">
                <Reveal>
                    <p className="text-sm text-signal">Career</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold leading-[1.15] md:text-4xl">Experience</h2>
                </Reveal>

                <ol className="mt-10 space-y-4">
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
