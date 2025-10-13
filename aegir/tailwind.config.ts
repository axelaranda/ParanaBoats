import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.tsx",
  ],
  theme: { extend: {} },
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
