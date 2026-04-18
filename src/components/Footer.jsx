import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-white/10 py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                    Built with <FiHeart className="text-red-500 animate-pulse" /> by {personalInfo.name} © {new Date().getFullYear()}
                </p>
                <div className="flex items-center gap-3">
                    {[
                        { icon: FiGithub, href: personalInfo.social.github },
                        { icon: FiLinkedin, href: personalInfo.social.linkedin },
                        { icon: FiTwitter, href: personalInfo.social.twitter },
                        { icon: FiMail, href: `mailto:${personalInfo.email}` },
                    ].map(({ icon: Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 rounded-full glass hover:scale-110 
                       hover:text-indigo-500 transition-all"
                        >
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}