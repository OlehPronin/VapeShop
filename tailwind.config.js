
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
              sans: ['DM Sans', 'sans-serif'],
            },
        },
        container: {
          center: true,
          padding: {
            DEFAULT: '20px',
            sm: '20px',
            lg: '20px',
            xl: '20px',
            '2xl': '20px',
          },
          
          screens: {
            sm: '600px',
            md: '728px',
            lg: '984px',
            xl: '1080px',
            '2xl': '1180px',
          },
        },
    },

    plugins: [],
};
