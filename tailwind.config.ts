import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      xs: ["7px", "9px"],
      ss: ["12px", "15px"],
      sm: ["14px", "20px"],
      base: ["16px", "20px"],
      herop: ["27px", "26px"],
      xl: ["24px", "32px"],
    },
  },
  plugins: [],
};
export default config;
