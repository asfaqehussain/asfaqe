import { motion, useReducedMotion } from 'framer-motion';

const easeOut = [0.23, 1, 0.32, 1];

export default function Reveal({ children, className, delay = 0 }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateY(12px)' }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{
                duration: reduceMotion ? 0.2 : 0.5,
                delay: reduceMotion ? 0 : delay,
                ease: easeOut,
            }}
        >
            {children}
        </motion.div>
    );
}
