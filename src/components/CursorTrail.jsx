import { useEffect, useRef } from 'react';

const CODE_CHARS = '01{}[]()<>/=;:abcdefxyz'.split('');

export default function CursorTrail() {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({ x: -999, y: -999 });
    const animRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const section = sectionRef.current;
        const ctx = canvas.getContext('2d');

        // Resize canvas to match section
        const resize = () => {
            const rect = section.getBoundingClientRect();
            canvas.width = section.offsetWidth;
            canvas.height = section.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Track mouse relative to section
        const handleMouseMove = (e) => {
            const rect = section.getBoundingClientRect();
            mouse.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };

            // Spawn glowing dot particles
            for (let i = 0; i < 2; i++) {
                particles.current.push({
                    type: 'dot',
                    x: mouse.current.x + (Math.random() - 0.5) * 8,
                    y: mouse.current.y + (Math.random() - 0.5) * 8,
                    life: 1,
                    size: Math.random() * 5 + 2,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: -Math.random() * 0.8 - 0.2,
                    color: Math.random() > 0.5 ? '#10b981' : '#06b6d4',
                });
            }

            // Occasionally spawn a floating code character
            if (Math.random() < 0.3) {
                particles.current.push({
                    type: 'char',
                    x: mouse.current.x + (Math.random() - 0.5) * 24,
                    y: mouse.current.y + (Math.random() - 0.5) * 12,
                    life: 1,
                    char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
                    size: Math.random() * 8 + 10,
                    vx: (Math.random() - 0.5) * 1.2,
                    vy: -Math.random() * 1.5 - 0.5,
                    color: Math.random() > 0.5 ? '#10b981' : '#06b6d4',
                });
            }
        };

        const handleMouseLeave = () => {
            mouse.current = { x: -999, y: -999 };
        };

        section.addEventListener('mousemove', handleMouseMove);
        section.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current = particles.current.filter((p) => {
                p.life -= p.type === 'char' ? 0.018 : 0.028;
                p.x += p.vx;
                p.y += p.vy;

                if (p.life <= 0) return false;

                ctx.save();
                ctx.globalAlpha = Math.min(p.life, 0.9);

                if (p.type === 'dot') {
                    // Glowing circle
                    ctx.shadowBlur = 14;
                    ctx.shadowColor = p.color;
                    ctx.fillStyle = p.color;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    // Code character
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = p.color;
                    ctx.fillStyle = p.color;
                    ctx.font = `${p.size}px 'JetBrains Mono', monospace`;
                    ctx.fillText(p.char, p.x, p.y);
                }

                ctx.restore();
                return true;
            });

            animRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            section.removeEventListener('mousemove', handleMouseMove);
            section.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animRef.current);
        };
    }, []);

    return (
        /* Invisible wrapper that gives the canvas a ref to the hero section */
        <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: 'none' }}
            />
        </div>
    );
}
