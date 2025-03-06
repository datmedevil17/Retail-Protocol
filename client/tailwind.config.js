const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00ffff",
        neonPurple: "#9d00ff",
        neonPink: "#ff00ff",
        darkBg: "#0a0a0a",
      },
      boxShadow: {
        neonBlue: "0px 0px 10px #00ffff",
        neonPurple: "0px 0px 15px #9d00ff",
        neonPink: "0px 0px 15px #ff00ff",
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-border":
          "linear-gradient(45deg, #7F00FF, #E100FF, #FF00F0, #E100FF, #7F00FF)",
        "cyberpunk-glow": "radial-gradient(circle, rgba(0, 255, 255, 0.3), rgba(157, 0, 255, 0.1))",
      },
      
       
      
      animation: {
        slide: "slide 6s linear",
        bounce: "bounce 5s infinite",
        fadeIn: "fadeIn 1s ease-out",
        rotate: "rotate 3s linear infinite",
        gradientBorder: "gradientBorder 5s linear infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        flicker: "flicker 1.5s infinite alternate",
        pulseNeon: "pulseNeon 2s infinite alternate",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(200%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        gradientBorder: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        flicker: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        pulseNeon: {
          "0%": { boxShadow: "0px 0px 10px #00ffff" },
          "100%": { boxShadow: "0px 0px 20px #9d00ff" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
