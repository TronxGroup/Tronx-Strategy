import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        tronx: {
          dark: "#05070B",
          gray: "#20232B",
          accent: "#00D8FF"
        }
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(0, 216, 255, 0.35)"
      },
      borderRadius: {
        "3xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
