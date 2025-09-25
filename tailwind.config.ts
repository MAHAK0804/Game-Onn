import type { Config } from "tailwindcss";

const config: Config = {
  plugins: [],
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//*.{js,ts,jsx,tsx,mdx}",
    "./src/app//*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(drawer|modal).js",
  ],
};
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "slide-left": "slide 20s linear infinite",
      },
    },
  },
};

export default config;
