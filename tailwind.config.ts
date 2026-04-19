import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        abyss: "rgb(var(--color-abyss) / <alpha-value>)",
        trench: "rgb(var(--color-trench) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        tide: "rgb(var(--color-tide) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)"
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', '"Helvetica"', '"Arial"', "sans-serif"],
        serif: [
          "var(--font-bropella)",
          '"Baskerville"',
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          '"Book Antiqua"',
          '"Times New Roman"',
          "serif"
        ]
      },
      boxShadow: {
        panel: "0 24px 90px rgba(1, 22, 43, 0.34)",
        halo:
          "0 0 0 1px rgba(193, 232, 255, 0.16), 0 26px 90px rgba(1, 22, 43, 0.46)"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      backgroundImage: {
        "ocean-panel":
          "linear-gradient(180deg, rgba(5, 38, 89, 0.78) 0%, rgba(2, 16, 36, 0.94) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
