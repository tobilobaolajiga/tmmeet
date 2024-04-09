/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',

    // './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          '.scrollbar-thin': {
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgb(31 29 29) white',
          },
          '.scrollbar-webkit': {
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#D9D9D9',
              borderRadius: '20px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#04A3E5',
              borderRadius: '20px',
            },
          },
        };
        addUtilities(newUtilities, ['responsive', 'hover']);
      },
    ],
  },
};
