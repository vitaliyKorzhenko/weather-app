import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './public/index.html',
        './path/to/your/css/file.css',
    ],
    theme: {
        extend: {
            colors: {
                'Label-Dark-Primary': '#FFF',
                'Label-Color-Dark-Secondary': 'rgba(235, 235, 245, 0.60)',
                'precipitation-probability': '#40CBD8',
                'purple-opacity-20': 'rgba(72, 49, 157, 0.20)',
                'hight-low-saved-location': 'rgba(235, 235, 245, 0.60)',
            },
            keyframes: {
                fadeOut: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
            animation: {
                fadeOut: 'fadeOut 3s forwards',
            },
        },
        boxShadow: {
            'custom-hourly-daily':
                '1px 1px 0px 0px rgba(255, 255, 255, 0.25) inset, 5px 4px 10px 0px rgba(0, 0, 0, 0.25)',
            'custom-search': '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
        },
        // backgroundColor: {
        //     'purple-opacity-20': 'rgba(72, 49, 157, 0.20)',
        // },
        borderColor: {
            'white-opacity-20': 'rgba(255, 255, 255, 0.20)',
        },
        fontFamily: {
            'sans-text': ['SF Pro Text', 'sans-serif'],
            'sans-display': ['SF Pro Display', 'sans-serif'],
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.scrollbar-hide': {
                    /* IE and Edge */
                    '-ms-overflow-style': 'none',

                    /* Firefox */
                    'scrollbar-width': 'none',

                    /* Safari and Chrome */
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
                '.font-feature-normal': {
                    fontFeatureSettings: 'normal',
                },
            });
        }),
    ],
};
