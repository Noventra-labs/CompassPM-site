/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#18181B",
        "surface-2": "#27272A",
        accent: "#6366F1",
        "accent-glow": "rgba(99,102,241,0.15)",
        "accent-dark": "#4F46E5",
        "text-primary": "#FAFAFA",
        "text-muted": "#71717A",
        "text-secondary": "#A1A1AA",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Cal Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(99,102,241,0.15)",
        "glow-lg": "0 0 40px rgba(99,102,241,0.25)",
        "glow-hover": "0 0 16px rgba(99,102,241,0.35)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
        bounce: "bounce 1.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 16px rgba(99,102,241,0.35)" },
          "50%": { boxShadow: "0 0 24px rgba(99,102,241,0.55)" },
        },
        blob: {
          "0%, 100%": { transform: "scale(1) translate(0,0)" },
          "50%": { transform: "scale(1.05) translate(12px,-8px)" },
        },
      },
    },
  },
  plugins: [],
};
