import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mak: 'var(--font-mak)',
      evolventa: 'var(--font-evolventa)'
    },
    fontSize: {
      'title-promo': ['64px', '68px'],
      title1: ['56px', '68px'],
      title2: ['32px', '38px'],
      title3: ['26px', '30px'],
      title4: ['22px', '30px'],
      body1: ['16px', '22px'],
      body2: ['12px', '16px'],
    },
    extend: {
      colors: {
        "foreground": "#251D15",
        "background": "#FFFAF5",
        "brown": "#724F2C",
        "light-brown": "#8C6D62",
        "peach": "var(--color-peach, #F4DFC9)",
        "beige": "#EEE6E3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
