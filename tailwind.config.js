/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        darkBlue : "#1b252f",
        skyBlue : '#00aeef' 
      },
      fontFamily: {
        secular: ['Secular One', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
      },
      spacing: {
        '446': '446px',
        '550': '550px',
        '100' : '100px',
        '200' : '200px',
        '300' : '300px',
        '800' : '800px',
      },
    },
  },
  plugins: [],
};
