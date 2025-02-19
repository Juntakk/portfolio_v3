/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "500ms",
      },
      rotate: {
        360: "360deg",
      },
      colors: {
        primary: "#0a192f", // Navy blue
        secondary: "#ccd6f6", // Light grayish-blue
        accent: "#52d4ba", // Bright teal
        muted: "#8892b0", // Muted blue-gray
        card: "#112240", // Card background
        border: "#1f2a48", // Card border
      },
      animation: {
        bounce: "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
