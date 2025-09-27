
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f7ff",
          100: "#e6efff",
          200: "#c4dbff",
          300: "#9ec6ff",
          400: "#6fa8ff",
          500: "#468aff",
          600: "#2f6ee6",
          700: "#2759bc",
          800: "#214a99",
          900: "#1d3e7f"
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
