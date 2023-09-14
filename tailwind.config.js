/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        active: "#0ea5e9",
        transition1: "#0284c7",
        transition2: "#0ea5e9",
        transition3: "#38bdf8",
      },
      backgroundImage: {
        explosion: `url(${process.env.NEXT_BASE_PATH}/image/bg-explosion.png)`,
        site: `url(${process.env.NEXT_BASE_PATH}/image/site-bg.svg)`,
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
    screens: { sm: "640px", md: "768px", lg: "960px", xl: "1200px" },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
