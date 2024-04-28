import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translatex(100%)" },
          "100%": { opacity: "1", transform: "translatex(0%)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translatex(-100%)" },
          "100%": { opacity: "1", transform: "translatex(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
