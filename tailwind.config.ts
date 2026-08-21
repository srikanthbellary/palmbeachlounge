import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F4EFE6",
        vellum: "#EBE3D4",
        card: "#F8F3EA",
        ink: "#1A1714",
        mute: "#5C564C",
        copper: "#B08A5B",
        "copper-bright": "#C4A484",
        "copper-deep": "#8C5E32",
        forest: "#0F2A1C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cinzel", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        house: "0.28em",
        salon: "0.42em",
      },
      maxWidth: {
        folio: "68rem",
      },
    },
  },
  plugins: [],
};

export default config;
