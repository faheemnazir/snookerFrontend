/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1280px",
        "2xl": "1440px",
      },
    },

    extend: {
      colors: {
        background: "#0A0A0A",
        secondary: "#e9c349",
        "primary-container": "#0d2c22",
        accent: "#C5A059",
        primary: "#004D40",
        card: "#121212",
        "muted-foreground": "#A1A1AA",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#c1c8c3",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-lowest": "#0e0e0e",
      },

      // ✅ CLEAN FONT SYSTEM (ONLY 2 FONTS)
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      // ✅ CONTROLLED TYPOGRAPHY SCALE
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "3xl": ["30px", { lineHeight: "36px", fontWeight: "600" }],
        "4xl": ["36px", { lineHeight: "42px", fontWeight: "700" }],
        "5xl": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "6xl": ["60px", { lineHeight: "68px", fontWeight: "700" }],
        "7xl": ["72px", { lineHeight: "80px", fontWeight: "700" }],
      },

      // ✅ BETTER LETTER SPACING (fixes your over-tracking issue)
      letterSpacing: {
        tight: "-0.02em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.08em",
      },

      // ✅ CONSISTENT FONT WEIGHTS
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      // ✅ UI POLISH
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },

      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.4)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};