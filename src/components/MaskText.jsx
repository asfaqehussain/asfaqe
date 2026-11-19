import { motion, useReducedMotion } from 'framer-motion';

const easeOut = [0.23, 1, 0.32, 1];

export default function MaskText({ as: Tag = 'h2', children, className, onLoad = false }) {
    const reduceMotion = useReducedMotion();
    const hidden = reduceMotion ? { opacity: 0 } : { transform: 'translateY(110%)' };
    const shown = reduceMotion ? { opacity: 1 } : { transform: 'translateY(0%)' };

    return (
        <Tag className={className}>
            <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <motion.span
                    className="block"
                    initial={hidden}
                    animate={onLoad ? shown : undefined}
                    whileInView={onLoad ? undefined : shown}
                    viewport={onLoad ? undefined : { once: true, margin: '-10% 0px' }}
                    transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: easeOut }}
                >
                    {children}
                </motion.span>
            </span>
        </Tag>
    );
}
