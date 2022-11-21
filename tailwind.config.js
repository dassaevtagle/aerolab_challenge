/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#E5F0FF",
          light2: "#CCE1FF",
        },
        neutral: {
          0: "#FFFFFF",
          100: "#F5F9FF",
          200: "#E6EDF7",
          300: "#DAE4F2",
          500: "#8FA3BF",
          600: "#7C899C",
          900: "#252F3D",
        },
        green: {
          DEFAULT: "#29CC74",
          light: "#CCFFE3",
        },
        red: {
          DEFAULT: "#E07F4F",
          light: "#FFDFD9",
        },
        fontFamily: {
          sans: ["Montserrat", "sans-serif"],
        },
      },
      borderRadius: {
        "4xl": "75px",
      },
      dropShadow: {
        1: "0px 2px 12px rgba(0, 0, 0, 0.08)",
        2: "0 2px 40px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
