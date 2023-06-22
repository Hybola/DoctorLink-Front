
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#35b8be",

          "secondary": "#EBEBEB",
          
          "accent": "#212528",
          
          "neutral": "#546285",
          
          "base-100": "#FFFF",
          
          "info": "#639dd4",
          
          "success": "#0d6d4f",
          
          "warning": "#FFA879",
          
          "error": "#FFDEDF",        },
      },
    ],
  },
  plugins: [require("daisyui")]
};
