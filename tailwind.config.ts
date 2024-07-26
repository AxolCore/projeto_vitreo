import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }
        'desktop': { 'min': '768px' },
        // => @media (min-width: 768px) { ... }
        'medium': {'max': '990px'},
  
        'fold': {'max': '500px'},
      },
      colors: {
        "darkgray": "#2B2B2B",
        "gray": "#AAAAAA",
        "lightgray": "#DDDDDD"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
