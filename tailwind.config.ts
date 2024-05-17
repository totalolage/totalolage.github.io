import type { Config } from "tailwindcss";
import containerPlugin from "@tailwindcss/container-queries";
import exposeColorsPlugin from "@tailwind-plugin/expose-colors";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
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
  plugins: [containerPlugin, exposeColorsPlugin()],
};

export default config;
