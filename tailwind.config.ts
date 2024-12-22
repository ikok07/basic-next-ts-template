import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "white",
        text: "#333333",
        secondary: "#555555",
        accent: "#ff9f11"
      },
      screens: {
        "xs": "380px"
      }
    },
  },
  plugins: [nextui()],
};
export default config;
