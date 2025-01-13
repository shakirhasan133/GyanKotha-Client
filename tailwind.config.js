/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5", //  primary brand color
        secondary: "#393E46", // Secondary color
        accent: "#222831", // Dark accent color
        light: "#EEEEEE", // Light background color
        bodyColor: "#eefbf3",
        muted: "#7A7A7A", // A muted gray for text or borders
        success: "#21BF73", // Green for success messages or actions
        error: "#FF4C29", // Red for error messages or alerts
        warning: "#FF9F1C", // Orange for warnings
        info: "#3A86FF", // Blue for informational elements
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
