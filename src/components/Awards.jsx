import { awards } from '../data/portfolioData';
import Reveal from './Reveal';

export default function Awards() {
    const award = awards[0];
    if (!award) return null;

    return (
        <section id="awards" className="scroll-mt-20 pb-8">
            <div className="shell">
                <Reveal className="panel flex flex-col gap-4 p-6 md:flex-row md:items-center md:gap-10 md:p-8">
                    <p className="font-display text-4xl font-semibold leading-[1.15] text-signal">{award.year}</p>
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight">{award.title}</h2>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                            {`${award.org} ${award.description}`}
                        </p>
                        {award.certificate && (
                            <a
                                href={award.certificate}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-1 inline-flex min-h-11 items-center text-sm text-fg transition-colors duration-150 hover:text-signal"
                            >
                                Certificate
                            </a>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
