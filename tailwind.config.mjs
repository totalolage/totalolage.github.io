export default {
  content: ["./src/**/*.{html,md}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
    },
  },
  plugins: [],
};
