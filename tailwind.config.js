/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00ADB5", // Base primary color
          light: "#8BE3E7", // Light shade of primary
          soft: "#66C8CE", // Softer shade of primary
          dark: "#007A80", // Darker shade of primary
          darkest: "#005054", // Darkest shade of primary
        },
        secondary: {
          DEFAULT: "#393E46",
          light: "#6C7078",
          soft: "#51555E",
          dark: "#2C3036",
          darkest: "#1F2328",
        },
        accent: {
          DEFAULT: "#222831",
          light: "#4D535A",
          soft: "#353A42",
          dark: "#1B1F26",
          darkest: "#14171C",
        },
        light: {
          DEFAULT: "#EEEEEE",
          soft: "#F3F3F3",
          dark: "#D5D5D5",
          darkest: "#BABABA",
        },
        bodyColor: {
          DEFAULT: "#eefbf3",
          light: "#F5FFF8",
          soft: "#E7F7EB",
          dark: "#D3EBDD",
          darkest: "#BFD0C3",
        },
        muted: {
          DEFAULT: "#7A7A7A",
          light: "#A1A1A1",
          soft: "#8C8C8C",
          dark: "#616161",
          darkest: "#4D4D4D",
        },
        success: {
          DEFAULT: "#21BF73",
          light: "#6FE3A8",
          soft: "#46CF8A",
          dark: "#199D5B",
          darkest: "#117542",
        },
        error: {
          DEFAULT: "#FF4C29",
          light: "#FF9982",
          soft: "#FF6E52",
          dark: "#CC3C1F",
          darkest: "#992E18",
        },
        warning: {
          DEFAULT: "#FF9F1C",
          light: "#FFCA7A",
          soft: "#FFB54E",
          dark: "#CC7F16",
          darkest: "#995F10",
        },
        info: {
          DEFAULT: "#3A86FF",
          light: "#7CB3FF",
          soft: "#5C9FFF",
          dark: "#2E69CC",
          darkest: "#204C99",
        },
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for cards
        btn: "0 2px 4px rgba(0, 173, 181, 0.5)", // Glow effect for buttons
      },
    },
  },
  plugins: [require("daisyui")],
};
