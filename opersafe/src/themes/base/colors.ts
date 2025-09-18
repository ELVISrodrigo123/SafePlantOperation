import { alpha, darken } from "@mui/material/styles";
import { lightColors, darkColors } from "./themeColors";
import { CustomColors } from "../types";

const createColors = (mode: "light" | "dark"): CustomColors => {
  const colors = mode === "light" ? lightColors : darkColors;

  return {
    gradients: {
      blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
      blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
      blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
      blue4: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
      blue5: "linear-gradient(135deg, #97ABFF 10%, #123597 100%)",
      orange1: "linear-gradient(135deg, #fcbf31ff 0%, #F55555 100%)",
      orange2: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
      orange3: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
      orangeDark1:
        mode === "light"
          ? "linear-gradient(135deg, #FF7B25 0%, #B46E3C 100%)"
          : "linear-gradient(135deg, #FF7B25 0%, #2C1A1D 100%)",
      orangeDark2:
        mode === "light"
          ? "linear-gradient(135deg, #b46e3cff 0%, #8B4513 100%)"
          : "linear-gradient(135deg, #b46e3cff 0%, #0f0e0eff 100%)",
      orangeDark3: "linear-gradient(135deg, #FF6B00 0%, #000000 100%)",
      orangeBackground:
        mode === "light"
          ? "rgba(255, 123, 37, 0.15)"
          : "rgba(128, 51, 12, 0.95)",
      purple1: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
      purple3: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      pink1: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
      pink2: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
      green1: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
      green2: "linear-gradient(to bottom, #00b09b, #96c93d)",
      black1: "linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)",
      black2: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
    },
    shadows: {
      success: `0px 1px 4px ${alpha(
        colors.success,
        0.25
      )}, 0px 3px 12px 2px ${alpha(colors.success, 0.35)}`,
      error: `0px 1px 4px ${alpha(
        colors.error,
        0.25
      )}, 0px 3px 12px 2px ${alpha(colors.error, 0.35)}`,
      info: `0px 1px 4px ${alpha(colors.info, 0.25)}, 0px 3px 12px 2px ${alpha(
        colors.info,
        0.35
      )}`,
      primary: `0px 1px 4px ${alpha(
        colors.primary,
        0.25
      )}, 0px 3px 12px 2px ${alpha(colors.primary, 0.35)}`,
      warning: `0px 1px 4px ${alpha(
        colors.warning,
        0.25
      )}, 0px 3px 12px 2px ${alpha(colors.warning, 0.35)}`,
      card: mode === "light" ? "0px 0px 2px #E2E8F0" : "0px 0px 2px #2D3748",
      cardSm: mode === "light" ? "0px 0px 2px #E2E8F0" : "0px 0px 2px #2D3748",
      cardLg:
        mode === "light"
          ? "0 0rem 14rem 0 rgb(0 0 0 / 10%), 0 0.8rem 2.3rem rgb(0 0 0 / 5%), 0 0.2rem 0.7rem rgb(0 0 0 / 10%)"
          : "0 0rem 14rem 0 rgb(0 0 0 / 20%), 0 0.8rem 2.3rem rgb(0 0 0 / 10%), 0 0.2rem 0.7rem rgb(0 0 0 / 15%)",
    },
    alpha: {
      white: {
        5: alpha(colors.white, 0.02),
        10: alpha(colors.white, 0.1),
        30: alpha(colors.white, 0.3),
        50: alpha(colors.white, 0.5),
        70: alpha(colors.white, 0.7),
        100: colors.white,
      },
      trueWhite: {
        5: alpha(colors.trueWhite, 0.02),
        10: alpha(colors.trueWhite, 0.1),
        30: alpha(colors.trueWhite, 0.3),
        50: alpha(colors.trueWhite, 0.5),
        70: alpha(colors.trueWhite, 0.7),
        100: colors.trueWhite,
      },
      black: {
        5: alpha(colors.black, 0.02),
        10: alpha(colors.black, 0.1),
        30: alpha(colors.black, 0.3),
        50: alpha(colors.black, 0.5),
        70: alpha(colors.black, 0.7),
        100: colors.black,
      },
    },
    secondary: {
      lighter: alpha(colors.secondary, 0.85),
      light: alpha(colors.secondary, 0.6),
      main: colors.secondary,
      dark: darken(colors.secondary, 0.2),
    },
    primary: {
      lighter: alpha(colors.primary, 0.85),
      light: alpha(colors.primary, 0.3),
      main: colors.primary,
      dark: darken(colors.primary, 0.2),
    },
    success: {
      lighter: alpha(colors.success, 0.85),
      light: alpha(colors.success, 0.3),
      main: colors.success,
      dark: darken(colors.success, 0.2),
    },
    warning: {
      lighter: alpha(colors.warning, 0.85),
      light: alpha(colors.warning, 0.3),
      main: colors.warning,
      dark: darken(colors.warning, 0.2),
    },
    error: {
      lighter: alpha(colors.error, 0.85),
      light: alpha(colors.error, 0.3),
      main: colors.error,
      dark: darken(colors.error, 0.2),
    },
    info: {
      lighter: alpha(colors.info, 0.85),
      light: alpha(colors.info, 0.3),
      main: colors.info,
      dark: darken(colors.info, 0.2),
    },
  };
};

export default createColors;
