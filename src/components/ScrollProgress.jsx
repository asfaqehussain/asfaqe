import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export default function ScrollProgress() {
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    if (reduceMotion) return null;

    return (
        <motion.div
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-signal"
            style={{ scaleX }}
        />
    );
}
