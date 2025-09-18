export { ThemeProvider, useTheme } from '../context/ThemeContext';
export type { ThemeContextType } from '../themes/types';

import { createTheme } from '@mui/material/styles';
import createPalette from './base/palette';
import { typography } from './base/typography';
import { breakpoints } from './base/breakpoints';
import { createComponents } from './components';
import { shadows } from './base/shadows';
import { shape } from './base/shape';
import createColors from './base/colors';
import { darkColors } from './base/themeColors';

const colors = createColors('dark');
const components = createComponents(colors);
const palette = createPalette('dark');

export const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components,
  shadows,
  shape,
  spacing: 9,
  custom: {
    colors,
    general: {
      reactFrameworkColor: "#00D8FF",
      borderRadiusSm: "6px",
      borderRadius: "10px",
      borderRadiusLg: "12px",
      borderRadiusXl: "16px",
    },
    sidebar: {
      background: darkColors.primaryAlt,
      boxShadow: "1px 0 0 #272C48",
      width: "290px",
      textColor: darkColors.secondary,
      dividerBg: "#272C48",
      menuItemColor: "#9EA4C1",
      menuItemColorActive: "#ffffff",
      menuItemBg: darkColors.primaryAlt,
      menuItemBgActive: "rgba(43, 48, 77, .6)",
      menuItemIconColor: "#444A6B",
      menuItemIconColorActive: "#ffffff",
      menuItemHeadingColor: darkColors.secondary,
    },
    header: {
      height: "80px",
      background: darkColors.defaultBg,
      boxShadow: "0px 1px 0px #272C48",
      textColor: darkColors.secondary,
    },
  },
});