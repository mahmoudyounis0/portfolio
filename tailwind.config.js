/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4831d4",
        morning: "#ccf381",
        fonts: "#3d155f",
        supcolor: "#F9F9F9",
        work: "#f5f4fc",
      },
      fontFamily: {
        mono: ["Space Mono"],
        kanit: ["Kanit"],
      },
      backgroundImage: {
        "footer-bg": "url('/images/contact.svg')",
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1025px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1279px",
      },
    },
  },
  plugins: [],
};
