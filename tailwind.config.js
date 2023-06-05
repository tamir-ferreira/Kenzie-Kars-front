/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          1: "#4529E6",
          2: "#5126EA",
          3: "#B0A6F0",
          4: "#EDEAFD",
        },
        grey: {
          0: "#0B0D0D",
          1: "#212529",
          2: "#495057",
          3: "#868E96",
          4: "#ADB5BD",
          5: "#CED4DA",
          6: "#DEE2E6",
          7: "#E9ECEF",
          8: "#F1F3F5",
          9: "#F8F9FA",
          10: "#FDFDFD",
        },
        white: {
          fixed: "#FFFFFF",
        },
        alert: {
          1: "#CD2B31",
          2: "#FDD8D8",
          3: "#FFE5E5",
        },
        success: {
          1: "#18794E",
          2: "#CCEBD7",
          3: "#DDF3E4",
        },
        random: {
          1: "#E34D8C",
          2: "#C04277",
          3: "#7D2A4D",
          4: "#7000FF",
          5: "#6200E3",
          6: "#36007D",
          7: "#349974",
          8: "#2A7D5F",
          9: "#153D2E",
          10: "#6100FF",
          11: "#5700E3",
          12: "#30007D",
        },
      },
      fontSize: {
        "heading-1-700": ["44px", { fontWeight: "700" }],
        "heading-2-600": ["36px", { fontWeight: "600" }],
        "heading-3-500": ["32px", { fontWeight: "500" }],
        "heading-3-600": ["32px", { fontWeight: "600" }],
        "heading-4-500": ["28px", { fontWeight: "500" }],
        "heading-4-600": ["28px", { fontWeight: "600" }],
        "heading-5-500": ["24px", { fontWeight: "500" }],
        "heading-5-600": ["24px", { fontWeight: "600" }],
        "heading-6-500": ["20px", { fontWeight: "500" }],
        "heading-6-600": ["20px", { fontWeight: "600" }],
        "heading-7-500": ["16px", { fontWeight: "500" }],
        "heading-7-600": ["16px", { fontWeight: "600" }],
        "body-1-400": ["16px", { fontWeight: "400" }],
        "body-1-600": ["16px", { fontWeight: "600" }],
        "body-2-400": ["14px", { fontWeight: "400" }],
        "body-2-500": ["14px", { fontWeight: "500" }],
        "button-big": ["16px", { fontWeight: "600" }],
        "button-medium": ["14px", { fontWeight: "600" }],
        "input-placeholder": ["16px", { fontWeight: "400" }],
        "input-label": ["14px", { fontWeight: "500" }],
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        lexend: "Lexend, sans-serif",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      padding: {
        15: "3.75rem",
      },
      gap: {
        13: "3.25rem",
      },
      width: {
        50: "12.5rem",
      },
      textShadow: {
        default: "2px 2px 4px 4px rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        "menu-profile": "0px 4px 40px -10px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        menu: "menu 0.5s",
      },
      keyframes: {
        menu: {
          "0%": {
            transform: "translateY(-150px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      container: {
        width: "100%",
        maxWidth: "1600px",
        margin: "0 auto",
      },
    },
  },
  /*  variants: {
    extend: {
      buttonSizes: ["responsive"],
    },
  }, */

  plugins: [],
};
