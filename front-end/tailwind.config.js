import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'Label-Dark-Primary': '#FFF',
                'Label-Color-Dark-Secondary': 'rgba(235, 235, 245, 0.60)',
            },
        },
        boxShadow: {
            'custom-box-shadow-hourly-daily':
                '1px 1px 0px 0px rgba(255, 255, 255, 0.25) inset, 5px 4px 10px 0px rgba(0, 0, 0, 0.25)', // Define the custom box-shadow
        },
        backgroundColor: {
            'purple-opacity-20': 'rgba(72, 49, 157, 0.20)', // Define the custom background color
        },
        borderColor: {
            'white-opacity-20': 'rgba(255, 255, 255, 0.20)', // Define the custom border color
        },
        fontFamily: {
            sans: ['SF Pro Text', 'SF Pro Display', 'sans-serif'],
        },
        backgroundSize: {
            '50%': '50%',
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
                '.font-feature-clig-off-liga-off': {
                    fontFeatureSettings: "'clig' off, 'liga' off",
                },
            });
        }),
        // plugin(function ({ addUtilities }) {
        //     const dropShadows = {
        //         '.drop-shadow-dark': {
        //             filter: 'drop-shadow(10px 10px 20px rgba(13, 20, 49, 0.50))',
        //         },
        //         '.drop-shadow-lighter': {
        //             boxShadow:
        //                 'drop-shadow(-10px -10px 20px rgba(255, 255, 255, 0.50))',
        //         },
        //     };

        //     addUtilities(dropShadows, ['responsive', 'hover']);
        // }),
    ],
};
