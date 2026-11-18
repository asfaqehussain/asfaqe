/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', 'system-ui', 'sans-serif'],
                display: ['Fraunces', 'Georgia', 'serif'],
            },
            colors: {
                canvas: 'var(--bg)',
                fg: 'var(--fg)',
                muted: 'var(--muted)',
                line: 'var(--line)',
                signal: 'var(--signal)',
                ink: 'var(--ink)',
            },
            maxWidth: {
                page: '1120px',
            },
            transitionTimingFunction: {
                out: 'var(--ease-out)',
            },
        },
    },
    plugins: [],
};
