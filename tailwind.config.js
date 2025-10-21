/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: [
        "./App.tsx",
        "./component/**/*.{js,jsx,ts,tsx}",
        "./screen/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                // Custom brand colors for easy usage with NativeWind/Tailwind
                light: '#E9E3DF',     // bg-light, text-light
                white: '#EEEEEE',
                primary: '#FF7A30',   // bg-primary, text-primary
                dark: '#31363F',      // bg-dark, text-dark
                muted: '#31363F',     // bg-muted, text-muted (alias)
                black: '#000000',
            },
        },
    },
    plugins: [],
}