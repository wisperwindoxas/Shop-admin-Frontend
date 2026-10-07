import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        surface: "#0f172a",
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          400: "#8B6CFF",
          500: "#6245ED",
          600: "#5134D6",
          700: "#4328B8",
        },
        fintech: {
          bg: "#0B0B10",
          card: "#111118",
          border: "#1C1C28",
          lightBg: "#F7F7FB",
        },
        primary: {
          DEFAULT: "#6245ED",
          hover: "#5134D6",
          glow: "rgba(98, 69, 237, 0.4)",
        },
        accent: {
          emerald: "#10b981",
          cyan: "#06b6d4",
          purple: "#8b5cf6",
          amber: "#f59e0b",
          rose: "#f43f5e",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
