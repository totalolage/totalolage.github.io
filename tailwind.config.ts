import type { Config } from "tailwindcss";
import pluginTypography from "@tailwindcss/typography";
import pluginQueries from "@tailwindcss/container-queries";

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
  plugins: [pluginTypography, pluginQueries],
};

export default config;
