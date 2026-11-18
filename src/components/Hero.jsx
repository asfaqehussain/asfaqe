import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const easeOut = [0.23, 1, 0.32, 1];

const textLinks = [
    { label: 'LinkedIn', href: personalInfo.social.linkedin, external: true },
    { label: 'GitHub', href: personalInfo.social.github, external: true },
    { label: 'Email', href: `mailto:${personalInfo.email}`, external: false },
];

const facts = [
    { value: '5 yrs', label: 'Shipping apps' },
    { value: 'iOS + Android', label: 'React Native' },
    { value: 'Ahmedabad', label: 'Based in India' },
];

const frames = [
    { src: '/hero/react.png', img: 'aspect-square object-cover' },
    { src: '/hero/developer.png', img: 'aspect-square bg-white object-cover' },
    { src: '/hero/agentic-ai.png', img: 'aspect-[16/9] object-cover', wide: true },
];

export default function Hero() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="home" className="shell grid items-center gap-12 pb-20 pt-28 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-36">
            <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateY(8px)' }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' }}
                transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: easeOut }}
            >
                <p className="inline-flex items-center gap-2 rounded-full border border-line bg-[color-mix(in_srgb,var(--bg)_70%,transparent)] px-3 py-1.5 text-sm text-muted backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                    Available for opportunities
                </p>

                <h1 className="mt-6 max-w-xl font-display text-5xl font-semibold leading-[1.12] md:text-7xl">
                    {personalInfo.name}
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                    Software engineer. Five years shipping React Native apps: offline-first, real-time, payments.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-1">
                    <a
                        href={personalInfo.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="press inline-flex min-h-11 items-center rounded-full bg-signal px-5 text-sm font-semibold text-ink"
                    >
                        Read resume
                    </a>
                    {textLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                            className="inline-flex min-h-11 items-center text-sm text-muted transition-colors duration-150 hover:text-fg"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
                    {facts.map((fact) => (
                        <div key={fact.label} className="panel px-3 py-3">
                            <dt className="text-sm font-semibold">{fact.value}</dt>
                            <dd className="mt-1 text-xs text-muted">{fact.label}</dd>
                        </div>
                    ))}
                </dl>
            </motion.div>

            <motion.div
                className="mx-auto grid w-full max-w-[280px] gap-3"
                aria-hidden="true"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateY(8px)' }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' }}
                transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: easeOut }}
            >
                <div className="grid grid-cols-2 gap-3">
                    {frames.filter((frame) => !frame.wide).map(({ src, img }) => (
                        <figure key={src} className="shot overflow-hidden rounded-2xl border border-line">
                            <img src={src} alt="" className={`w-full ${img}`} />
                        </figure>
                    ))}
                </div>
                {frames.filter((frame) => frame.wide).map(({ src, img }) => (
                    <figure key={src} className="shot overflow-hidden rounded-2xl border border-line">
                        <img src={src} alt="" className={`w-full ${img}`} />
                    </figure>
                ))}
            </motion.div>
        </section>
    );
}
