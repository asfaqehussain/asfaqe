import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function CountUp({ to = 5, suffix = ' yrs' }) {
    const reduceMotion = useReducedMotion();
    const ref = useRef(null);
    const started = useRef(false);
    const [value, setValue] = useState(reduceMotion ? to : 0);

    useEffect(() => {
        if (reduceMotion) {
            setValue(to);
            return undefined;
        }

        const node = ref.current;
        if (!node) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return;
                started.current = true;
                const start = performance.now();
                const tick = (now) => {
                    const progress = Math.min(1, (now - start) / 600);
                    const eased = 1 - (1 - progress) ** 3;
                    setValue(Math.round(eased * to));
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                observer.disconnect();
            },
            { threshold: 0.6 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [reduceMotion, to]);

    return (
        <span ref={ref}>
            {value}
            {suffix}
        </span>
    );
}
