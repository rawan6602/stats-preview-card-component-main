/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*css"
  ],
  theme: {
    extend: {
          maxWidth:{
           'x':'1113px',
          },
          fontSize:{
            'xs':'0.8rem',
            'xxs':'0.6rem',
           
          },
          spacing: {
            '3x': '2.875rem',

          },
          colors:{
          'dark-blue':'hsl(233, 47%, 7%)',
          'card-background':'hsl(244, 38%, 16%)',
          'main-paragraph':'hsla(0, 0%, 100%, 0.75)',
          'stat-headings':'hsla(0, 0%, 100%, 0.6)',
          'Soft-violet':'hsl(277, 64%, 61%)',
        },
        },

          fontFamily:{
          'Inter':'"Inter", sans-serif',
          'lexend-deca':'"Lexend Deca", sans-serif',

      },
  },
  plugins: [],
}
