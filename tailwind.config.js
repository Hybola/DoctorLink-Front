/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            // "light",
            // "dark",
            // "cupcake",
            {
                mytheme: {
                    primary: '#3C65F5',

                    secondary: '#EBEBEB',

                    accent: '#212528',

                    neutral: '#546285',

                    'base-100': '#FFFF',

                    info: '#639dd4',

                    success: '#05264E',

                    warning: '#FFA879',

                    error: '#FFDEDF',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
}
