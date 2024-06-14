import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      //   backgroundImage: {
      //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //     "gradient-conic":
      //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   },
    },
    fontSize: {
      xss: ["7px", "5px"],
      xs: ["7px", "9px"],
      ss: ["12px", "15px"],
      sm: ["14px", "20px"],
      base: ["16px", "20px"],
      xl: ["24px", "32px"],
    },
    screens: {
      'ss': '0px',
      // => @media (min-width: 0px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  darkMode: "class",
 plugins: [nextui()],
};
export default config;
