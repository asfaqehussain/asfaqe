import { personalInfo } from '../data/portfolioData';
import MaskText from './MaskText';
import Reveal from './Reveal';

export default function About() {
    return (
        <section id="about" className="scroll-mt-20 py-16 md:py-24">
            <div className="shell">
                <Reveal>
                    <p className="text-sm text-signal">Profile</p>
                </Reveal>
                <MaskText className="mt-2 font-display text-3xl font-semibold leading-[1.15] md:text-4xl">
                    About
                </MaskText>

                <div className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
                    <Reveal className="panel p-6 md:p-8">
                        <p className="text-lg leading-relaxed text-muted">{personalInfo.bio}</p>
                        <p className="mt-6 text-base">{personalInfo.education}</p>
                    </Reveal>
                    <Reveal delay={0.05} className="panel flex flex-col justify-between gap-6 p-6 md:p-8">
                        <div>
                            <p className="text-sm text-muted">Location</p>
                            <p className="mt-1 text-lg font-semibold">{personalInfo.location}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted">Phone</p>
                            <a
                                href="tel:+917733949369"
                                className="mt-1 inline-flex min-h-11 items-center text-lg font-semibold transition-colors duration-150 hover:text-signal"
                            >
                                {personalInfo.phone}
                            </a>
                        </div>
                        <div>
                            <p className="text-sm text-muted">Email</p>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="mt-1 inline-flex min-h-11 items-center text-lg font-semibold transition-colors duration-150 hover:text-signal"
                            >
                                {personalInfo.email}
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
