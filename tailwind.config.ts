import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#12372A",
          dark: "#0B241B",
          light: "#1e523f",
        },
        emerald: {
          dark: "#0B241B",
        },
        cream: {
          DEFAULT: "#F8F3E7",
          light: "#FCFAF4",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E6C65c",
          dark: "#B38F24",
          accent: "#F4D068",
        },
        beige: {
          DEFAULT: "#E9DFC8",
          light: "#F3EDE0",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'gold-pulse': 'goldPulse 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 175, 55, 0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
