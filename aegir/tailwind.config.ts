import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.tsx",
  ],

  theme: { extend: {
           keyframes: {
        waveDrift: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, 
        },
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(6px)" },
        },
      },
      animation: {
        waveSlow: "waveDrift 22s linear infinite",
        waveMed:  "waveDrift 16s linear infinite",
        waveFast: "waveDrift 10s linear infinite",
        bob:      "bob 6s ease-in-out infinite",
      },
  } 
},

  plugins: [require("@tailwindcss/line-clamp")], 

  // @ts-expect-error – Tailwind safelist no está tipado pero funciona
  safelist: [
    "line-clamp-1",
    "line-clamp-2",
    "line-clamp-3",
    "line-clamp-4",
    "line-clamp-5",
    "line-clamp-6",
    "line-clamp-none",
  ],

};

export default config;

