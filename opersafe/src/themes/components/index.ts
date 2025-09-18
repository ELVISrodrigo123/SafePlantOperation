import { alpha, darken } from "@mui/material/styles";
import { themeColors } from "../base/themeColors";
import { Components } from "@mui/material/styles";
import { CustomColors } from "../types";
export const createComponents = (colors: CustomColors): Components => ({
  MuiCssBaseline: {
    styleOverrides: {
      "html, body": {
        width: "100%",
        height: "100%",
      },
      body: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
        flex: 1,
      },
      "#__next": {
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column",
      },
      html: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
      },
      ".child-popover .MuiPaper-root .MuiList-root": {
        flexDirection: "column",
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: colors.primary.lighter,
      },
      "#nprogress .spinner-icon": {
        borderTopColor: colors.primary.lighter,
        borderLeftColor: colors.primary.lighter,
      },
      "#nprogress .peg": {
        boxShadow: `0 0 15px ${colors.primary.lighter}, 0 0 8px ${colors.primary.light}`,
      },
      ":root": {
        "--swiper-theme-color": colors.primary.main,
        colorScheme: "dark",
      },
      code: {
        background: colors.info.lighter,
        color: colors.alpha.black[100],
        borderRadius: 4,
        padding: 4,
      },
      "@keyframes pulse": {
        "0%": { transform: "scale(.75)" },
        "20%": { transform: "scale(1.1)" },
        "40%": { transform: "scale(.75)" },
        "60%": { transform: "scale(1.05)" },
        "80%": { transform: "scale(.75)" },
        "100%": { transform: "scale(.75)" },
      },
      "@keyframes ripple": {
        "0%": { transform: "scale(.8)", opacity: 1 },
        "100%": { transform: "scale(2.8)", opacity: 0 },
      },
      "@keyframes float": {
        "0%": { transform: "translate(0%, 0%)" },
        "100%": { transform: "translate(3%, 3%)" },
      },
    },
  },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(darken(themeColors.primaryAlt, 0.4), 0.2),
        backdropFilter: "blur(2px)",
        "&.MuiBackdrop-invisible": {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: themeColors.black,
        "&.Mui-focused": {
          color: themeColors.black,
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        textTransform: "none",
        marginLeft: 8,
        marginRight: 8,
        fontWeight: "bold",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
        margin: "0 8px",
        minWidth: "fit-content",
        padding: 0,
        "@media (min-width: 600px)": {
          minWidth: "fit-content",
          padding: 0,
        },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: colors.alpha.black[10],
        border: 0,
        height: 1,
      },
      vertical: {
        backgroundColor: colors.alpha.black[10],
        border: 0,
        width: 1,
      },
      withChildren: {
        "&:before, &:after": {
          border: 0,
        },
      },
      wrapper: {
        background: colors.alpha.white[100],
        fontWeight: "bold",
        height: 24,
        lineHeight: "24px",
        marginTop: -12,
        color: "inherit",
        textTransform: "uppercase",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        padding: 0,
        backgroundColor: colors.alpha.white[100],
      },
      elevation0: {
        boxShadow: "none",
      },
      elevation: {
        boxShadow: colors.shadows.card,
      },
      elevation2: {
        boxShadow: colors.shadows.cardSm,
      },
      elevation24: {
        boxShadow: colors.shadows.cardLg,
      },
      outlined: {
        boxShadow: colors.shadows.card,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: colors.primary.main,
        textDecoration: "none",
        "&:hover": {
          color: colors.primary.dark,
          textDecoration: "underline",
        },
      },
    },
  },
});