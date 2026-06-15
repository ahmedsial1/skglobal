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
            dark: "#030712", // Matte Obsidian Background
            DEFAULT: "#0B0F19", // Dark Obsidian Card
            light: "#111827", // Slightly lighter for highlights
          },
          navy: {
            DEFAULT: "#0A192F",
            deep: "#020C1B",
            light: "#172A45",
          },
          gray: {
            light: "#94A3B8",
            DEFAULT: "#64748B",
            dark: "#334155",
            industrial: "#475569",
          },
          gold: {
            light: "#FDE047",
            DEFAULT: "#FACC15", // Electric Industrial Gold
            dark: "#EAB308",
            accent: "#CA8A04",
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
