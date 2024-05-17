import type { Config } from "tailwindcss";
import containerPlugin from "@tailwindcss/container-queries";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
    },
  },
  plugins: [containerPlugin],
};

export default config;
