import { alpha, darken } from '@mui/material/styles';
import { lightColors, darkColors } from './themeColors';

const createPalette = (mode: 'light' | 'dark') => {
  const colors = mode === 'light' ? lightColors : darkColors;
  
  return {
    common: {
      black: colors.black,
      white: colors.white,
    },
    mode: mode,
    primary: {
      light: alpha(colors.primary, 0.3),
      main: colors.primary,
      dark: darken(colors.primary, 0.2),
      contrastText: mode === 'light' ? colors.white : colors.textPrimary,
    },
    secondary: {
      light: alpha(colors.secondary, 0.3),
      main: colors.secondary,
      dark: darken(colors.secondary, 0.2),
      contrastText: colors.white,
    },
    error: {
      light: alpha(colors.error, 0.3),
      main: colors.error,
      dark: darken(colors.error, 0.2),
      contrastText: colors.trueWhite,
    },
    success: {
      light: alpha(colors.success, 0.3),
      main: colors.success,
      dark: darken(colors.success, 0.2),
      contrastText: colors.trueWhite,
    },
    info: {
      light: alpha(colors.info, 0.3),
      main: colors.info,
      dark: darken(colors.info, 0.2),
      contrastText: colors.trueWhite,
    },
    warning: {
      light: alpha(colors.warning, 0.3),
      main: colors.warning,
      dark: darken(colors.warning, 0.2),
      contrastText: colors.trueWhite,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      disabled: alpha(colors.textPrimary, 0.5),
    },
    background: {
      paper: colors.paperBg,
      default: colors.defaultBg,
    },
    action: {
      active: colors.textPrimary,
      hover: alpha(colors.primary, 0.1),
      hoverOpacity: 0.1,
      selected: alpha(colors.textPrimary, 0.1),
      selectedOpacity: 0.1,
      disabled: alpha(colors.textPrimary, 0.5),
      disabledBackground: alpha(colors.textPrimary, 0.05),
      disabledOpacity: 0.38,
      focus: alpha(colors.textPrimary, 0.1),
      focusOpacity: 0.05,
      activatedOpacity: 0.12,
    },
    divider: alpha(colors.textPrimary, 0.1),
  };
};

export default createPalette;