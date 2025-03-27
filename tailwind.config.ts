const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                aurora: "aurora 60s linear infinite",
            },
            scroll: {
                smooth: 'smooth',
            },
            keyframes: {
                aurora: {
                    from: {
                    backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            },
            fontFamily: {
                custom: ['emblema-one', 'sans-serif'],
                emblema: ['var(--font-emblema-one)'],
                simsun: ['SimSun', 'NSimSun', 'sans-serif'],
            }
        }
    },
    plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
