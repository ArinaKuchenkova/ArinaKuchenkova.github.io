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
      'title-promo': "clamp(2rem, 1.122rem + 3.9024vw, 4rem)",
      title1: ['clamp(1.625rem, 0.8018rem + 3.6585vw, 3.5rem)', '1.5'], // title1 -> title3
      title2: ['clamp(1.375rem, 1.1006rem + 1.2195vw, 2rem)', '1.5'], // title2 -> title4
      title3: ['clamp(1.125rem, 0.976vw + 0.905rem, 1.625rem)', '1.5'],// title3 -> title4 ['26px', '30px'],
      title4: ['22px', '30px'],
      body1: ['clamp(0.875rem, 0.244vw + 0.82rem, 1rem)', '1.5'],
      body2: ['0.75rem', '1.5'],
    },
    extend: {
      colors: {
        "foreground": "#251D15",
        "background": "var(--color-background, #FFFAF5)",
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
