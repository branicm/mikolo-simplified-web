import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#3B0E22", // deep gomesi maroon — primary ink
          light: "#5C1936",
          50: "#F7EEF1",
        },
        sash: {
          DEFAULT: "#C89B3C", // gold sash thread — accent
          dark: "#A87C24",
          light: "#E8C878",
        },
        bark: {
          DEFAULT: "#6B4226", // barkcloth brown — secondary text/borders
          light: "#9C7250",
        },
        cream: {
          DEFAULT: "#FBF7EF", // kanzu cream — page background
          card: "#FFFFFF",
        },
        millet: {
          DEFAULT: "#3F6B4A", // millet green — success / collected
          light: "#E4EFE6",
        },
        coral: {
          DEFAULT: "#C2542F", // bead coral — warnings / outstanding
          light: "#F6E4DB",
        },
      },
      fontFamily: {
        display: ["var(--font-marcellus)", "serif"],
        body: ["var(--font-inter-tight)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(59, 14, 34, 0.06), 0 8px 24px -12px rgba(59, 14, 34, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
