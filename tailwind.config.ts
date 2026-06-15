import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sial: {
          slate: {
            dark: "#0B0F19",
            DEFAULT: "#0F172A",
            light: "#1E293B",
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
            light: "#FCD34D",
            DEFAULT: "#F59E0B",
            dark: "#D97706",
            accent: "#B45309",
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
