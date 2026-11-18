import { personalInfo } from '../data/portfolioData';

const links = [
    { label: 'GitHub', href: personalInfo.social.github },
    { label: 'LinkedIn', href: personalInfo.social.linkedin },
    { label: 'Email', href: `mailto:${personalInfo.email}` },
];

export default function Footer() {
    return (
        <footer className="border-t border-line py-10">
            <div className="shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                    {personalInfo.name} © {new Date().getFullYear()}
                </p>
                <div className="flex flex-wrap gap-x-6">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            {...(link.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
                            className="inline-flex min-h-11 items-center text-sm text-muted transition-colors duration-150 hover:text-fg"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
