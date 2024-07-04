import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        "main-1": "69px",
        "main-2": "168px",
        "main-3": "267px",
        "main-4": "367px",
        "main-5": "466px",
        "main-6": "565px",
        "main-7": "664px",
        "main-8": "763px",
        "main-9": "863px",
        "main-10": "962px",
        "main-11": "1061px",
      },
      maxWidth: {
        "main-1": "69px",
        "main-2": "168px",
        "main-3": "267px",
        "main-4": "367px",
        "main-5": "466px",
        "main-6": "565px",
        "main-7": "664px",
        "main-8": "763px",
        "main-9": "863px",
        "main-10": "962px",
        "main-11": "1061px",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
      padding: {
        section: "100px",
      },
      gap: {
        main: "30px",
      },
      borderRadius: {
        main: "20px",
      },
      screens: {
        big: [{ min: "1024px" }, { min: "1280px" }],
        small: [{ max: "1023px" }],
      },
      fontFamily: {
        text: ["var(--font-text)"],
        title: ["var(--font-title)"],
      },
      colors: {
        primary: "#6938D9",
        secondary: "#0F0722",

        dark: "#111",
        "dark-light": "#171717",

        link: "#0066FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(({ matchUtilities }: any) => {
      matchUtilities({
        x: (value: string) => ({
          [`@apply ${value.replaceAll(",", " ")}`]: {},
        }),
      });
    }),
  ],
};
export default config;
