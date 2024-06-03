/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkgreen": "#2FB08A",
        "green": "#49DCB1",
        "black": "#2D3142",
        "darkblack": "#000000",
        "darkblack-75": "#000000BF",
        "darkblack-50": "#00000080",
        "darkblack-25": "#00000040",
        "white": "#FFFFFF",
        "lightwhite": "#EEEEEE",
        "grey": "#454545",
        "lightgrey": "#F5F5F5"
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        cinzeldeco: ['var(--font-cinzel-deco)'],
        gothicA1: ['var(--font-gothicA1)']
      },
      boxShadow: {
        'slider-thumb': '0px 0px 0px 10px #49DCB1',
        'around': '0px 2px 10px 1px #00000040'
      },
    },
  },
  plugins: [],
}
