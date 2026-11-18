import { skills } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-20 py-16 md:py-24">
            <div className="shell">
                <Reveal>
                    <p className="text-sm text-signal">Toolkit</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold leading-[1.15] md:text-4xl">Skills</h2>
                </Reveal>

                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((group, index) => (
                        <Reveal key={group.category} delay={index * 0.05} className="panel p-5">
                            <h3 className="text-base font-semibold">{group.category}</h3>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-full border border-line bg-[color-mix(in_srgb,var(--bg)_55%,transparent)] px-3 py-1.5 text-sm text-muted"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
