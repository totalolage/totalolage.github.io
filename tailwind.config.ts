import type { Config } from "tailwindcss";
import exposeColorsPlugin from "@tailwind-plugin/expose-colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
      colors: {
        "bg-light": "var(--tw-slate-50)",
        "bg-dark": "var(--tw-slate-800)",
        "bg-footer-light": "var(--tw-slate-100)",
        "bg-footer-dark": "var(--tw-black)",
      },
    },
  },
  plugins: [
    exposeColorsPlugin(),
  ],
} satisfies Config;
