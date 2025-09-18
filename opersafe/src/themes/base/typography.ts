import { TypographyVariantsOptions } from "@mui/material/styles";
export const typography: TypographyVariantsOptions = {
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  h1: {
    fontWeight: 700,
    fontSize: 35,
    lineHeight: 1.2,
  },
  h2: {
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 1.3,
  },
  h3: {
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 1.4,
  },
  h4: {
    fontWeight: 700,
    fontSize: 19,
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 1.4,
  },
  h6: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 1.4,
  },
  body1: {
    fontSize: 25,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 1.5,
  },
  button: {
    fontWeight: 600,
    textTransform: "none" as const,
  },
  caption: {
    fontSize: 13,
    textTransform: "uppercase" as const,
  },
  subtitle1: {
    fontSize: 14,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 1.5,
  },
  overline: {
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase" as const,
  },
};
