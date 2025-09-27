import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E6FAFC",
          100: "#CCF4F9",
          200: "#99E9F3",
          300: "#66DEEDE",
          400: "#33D3E7",
          500: "#1BC5D6", // 🎯 Color principal del logo
          600: "#16A6B6",
          700: "#118896",
          800: "#0C6A76",
          900: "#074C56"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.2)"
      }
    },
  },
  plugins: [],
};

export default config;
