import { useRef } from 'react';

/**
 * A card wrapper that shows a mouse-tracking rainbow gradient  
 * glow on the border as the cursor moves over it.
 */
export default function GlowCard({ children, className = '', style = {} }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        // reset so the glow fades at last position then disappears via opacity
        card.style.setProperty('--mouse-x', `-9999px`);
        card.style.setProperty('--mouse-y', `-9999px`);
    };

    return (
        <div
            ref={cardRef}
            className={`glow-card ${className}`}
            style={{ '--mouse-x': '-9999px', '--mouse-y': '-9999px', ...style }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}
