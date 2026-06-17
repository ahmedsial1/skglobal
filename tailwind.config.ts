import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        heading: ["var(--font-space-grotesque)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sial: {
          slate: {
            dark: "#FFFFFF", // Pure White global background
            DEFAULT: "#F1F5F9", // Ultra-light Slate Card Background
            light: "#E2E8F0", // Slightly darker slate for alternate sections/borders
          },
          navy: {
            DEFAULT: "#1E40AF", // Industrial Steel Blue
            deep: "#0F172A", // Deep Charcoal/Navy
            light: "#3B82F6",
          },
          gray: {
            light: "#475569", // Steel Gray secondary text
            DEFAULT: "#334155",
            dark: "#0F172A", // Deep Charcoal primary text
            industrial: "#475569",
            medium: "#64748B",
          },
          gold: {
            light: "#D97706",
            DEFAULT: "#B45309", // Rich Amber-Gold
            dark: "#92400E",
            accent: "#78350F",
          },
          blue: {
            DEFAULT: "#1E40AF", // Industrial Steel Blue
            dark: "#1E3A8A",
            light: "#3B82F6",
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
