/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(0, 159, 127)",
                grayBg: "#F3F4F6"
            },
        },
    },
    plugins: [],
};
