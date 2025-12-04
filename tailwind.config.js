/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0f172a', // Azul marinho profundo (slate-900)
                secondary: '#334155', // Cinza chumbo (slate-700)
                accent: '#dc2626', // Vermelho Vibrante (red-600)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
