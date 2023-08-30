const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    /* For A4 size */
    screens: {
      screen: {"raw": "screen"},
      print: {"raw": "print"},
      xsm: "500px",
      sm: "640px",
      md: "811px",
      lg: "1051px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        "firago": ["FiraGO", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm2: "0.9375rem", // 15px label
        base: "1rem", // 16px base
        md: "1.0625rem", // 17px body
        lg: "1.125rem", // 18px heading
      },
      lineHeight: {
        snugish: "1.32",
        normal: "1.34",
      },
      maxWidth: {
        "a4": "64.609375rem"
      },
      height: {
        "a4": "91.350883rem",
        "a4-col": "77.038383rem",
        "a4-col-full": "83.350883rem",
      },
      spacing: {
        "0.5": "2px", // 2px
        "1.5": "0.375rem", // 6px
        "1.6": "0.4375rem", // 7px
        "2.1": "0.5625rem", // 9px
        "2.5": "10px", // 10px
        "3.2": "0.8125rem", // 16px
        "4.5": "1.125rem", // 8px
        "11": "2.75rem", // 44px (once)
      },
      colors: {
        gray: {
          "150": "hsl(210, 44%, 97%)",
          "250": "hsl(210, 40%, 93.5%)",
          "550": "hsl(218, 20%, 63%)",
          "650": "hsl(216, 15%, 48%)",
          "750": "hsl(214, 17%, 32%)",
          ...defaultTheme.colors.gray
        },
        link: "#fbf3f3"
      },
    },
  },
};
