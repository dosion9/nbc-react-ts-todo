import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "0.5rem",

  color: {
    white: "#fff",
    black: "#000",
    base: "#EB7E23",
    baseDark: "#c9620c",
    baseLight: "#f58f3b",
    success: "#198754",
    successDark: "#0f5c38",
    successLight: "#27a36a",
    warning: "#e3ab02",
    warningDark: "#cf9b02",
    warningLight: "#fcce42",
    danger: "#dc3545",
    dangerDark: "#b32431",
    dangerLight: "#eb5967",
    disabled: "#525151"
  },

  spacing: {
    sm: "0.5rem",
    base: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },

  fontSize: {
    sm: "0.75rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "1.5rem"
  }
};

export { theme };
