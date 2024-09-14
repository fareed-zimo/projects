/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      fontSize: {
        "responsive-very-small": "clamp(8px, 1vw, 20px)", // Adjust the min and max values as needed
        "responsive-small": "clamp(8px, 1vw, 19px)", // Adjust the min and max values as needed
        "responsive-base": "clamp(15px, 2vw, 40px)", // Adjust the min and max values as needed
        "responsive-large": "clamp(20.3px, 3vw, 76.5px)", // Adjust the min and max values as needed
        "responsive-xlarge": "clamp(32.5px, 4vw, 108.5px)", // Adjust the min and max values as needed
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
