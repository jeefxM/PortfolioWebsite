/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "144": "40rem",
        '128': "35rem",
        '104': "23rem"
      },
      backgroundColor: {
        first: "#0F172A",
        second: "#7477FF",
        third: "#1E293B",
      },
      colors: {
        second: "#7477FF",
        zimaBlue: "#16B8F3",
        purple:"#9a00ff",
        palePink:"#F0DDDE",
        grayBlack: "#1C2A4A",
        russianViolet:"#3b1c4a",
        byzantium:"#782169",
        blueE:"rgb(25,118,210)"
      },
    },
    fontFamily: {
      pacifico: ["Pacifico"],
      inter: ["Inter"],
      poppins: ["Poppins"],
    },
    
    // width: {
    //   102: "23rem",
    // },
  },
  plugins: [],
};
