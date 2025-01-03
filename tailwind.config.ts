import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background  : "var(--background)",
        foreground  : "var(--foreground)",
        "brand-main": "var(--brand-main)",
        "brand-dark": "var(--brand-dark)",
      },
    },
  },
  darkMode: "class",
  plugins : [nextui()],
} satisfies Config;
