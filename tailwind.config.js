/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#1A4D2E',
        green: '#00C54D',
        gray: {
          100: '#282828',
          200: '#9D9FA1',
          300: '#D0D5DD',
          400: '#475467',
          500: '#838383',
          600: '#D9D9D9',
          700: '#ABABAB'
        }
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",

        // "dm-serif-display": "'DM Serif Display'",
        // "text-sm-leading-5-font-medium": "Inter",
        // raleway: "Raleway",
      },
    },

  },
  plugins: [],
}
