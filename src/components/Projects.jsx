import { projects } from '../data/portfolioData';
import MaskText from './MaskText';
import Reveal from './Reveal';

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-20 py-16 md:py-24">
            <div className="shell">
                <Reveal>
                    <p className="text-sm text-signal">Selected work</p>
                </Reveal>
                <MaskText className="mt-2 font-display text-3xl font-semibold leading-[1.15] md:text-4xl">
                    Apps in the wild
                </MaskText>

                <ul className="mt-10 grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => {
                        const contain = project.fit === 'contain';

                        return (
                            <li key={project.id} className="h-full">
                                <Reveal delay={index * 0.05} className="h-full">
                                <div className="project-card panel h-full overflow-hidden">
                                {project.image ? (
                                    <div
                                        className="shot relative flex h-64 items-center justify-center overflow-hidden"
                                        style={contain && project.wash ? { background: project.wash } : undefined}
                                    >
                                        <img
                                            src={project.image}
                                            alt=""
                                            className={contain ? 'max-h-[78%] max-w-[78%] rounded-[22%] object-contain' : 'h-full w-full object-cover object-top'}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-40 items-end border-b border-line px-6 pb-5">
                                        <p className="text-sm text-muted">Screenshot not public yet</p>
                                    </div>
                                )}
                                <div className="p-5 md:p-6">
                                    <div className="flex items-start gap-3">
                                        {project.icon && project.icon !== project.image && (
                                            <img
                                                src={project.icon}
                                                alt=""
                                                className="h-12 w-12 shrink-0 rounded-xl bg-white object-contain p-0.5"
                                            />
                                        )}
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                                            {project.links?.length > 0 && (
                                                <div className="mt-1 flex flex-wrap gap-x-4">
                                                    {project.links.map((link) => (
                                                        <a
                                                            key={link.href}
                                                            href={link.href}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex min-h-11 items-center gap-1 text-sm text-fg transition-colors duration-150 hover:text-signal"
                                                        >
                                                            {link.label}
                                                            <span className="link-arrow" aria-hidden="true">
                                                                →
                                                            </span>
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <li
                                                key={tag}
                                                className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                </div>
                                </Reveal>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
