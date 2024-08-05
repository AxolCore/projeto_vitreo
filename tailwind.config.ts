import { transform } from "next/dist/build/swc";
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
        "lightgray": "#DDDDDD",
        "darkblue": "#265284"
        
      },
      backgroundImage: {
        "fundoBanner":"url(/assets/imagemBanner.jpg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "parallax-bg": "url(/assets/parallax-bg.jpg)",
      },

      animation: {
        "revelar-esquerda": 'esquerda 0.5s ease-in-out',
        "revelar-direita": 'direita 0.5s ease-in-out',
      },
      keyframes: {
        esquerda: {
          '0%': { "opacity": "0%", transform: "translateX(-10vw)" }, 
          '100%': { "opacity": "100%", transform: "translateX(0)"},
        },
        direita: {
          '0%': { "opacity": "0%", transform: "translateX(10vw)" }, 
          '100%': { "opacity": "100%", transform: "translateX(0)"},
        },
      }
    },
  },
  plugins: [],
};
export default config;
