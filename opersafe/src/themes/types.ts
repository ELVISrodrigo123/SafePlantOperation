
export interface CustomColors {
  gradients: {
    blue1: string;
    blue2: string;
    blue3: string;
    blue4: string;
    blue5: string;
    orange1: string;
    orange2: string;
    orange3: string;
    orangeDark1: string;
    orangeDark2: string;
    orangeDark3: string;
    orangeBackground: string;
    purple1: string;
    purple3: string;
    pink1: string;
    pink2: string;
    green1: string;
    green2: string;
    black1: string;
    black2: string;
  };
  shadows: {
    success: string;
    error: string;
    primary: string;
    warning: string;
    info: string;
    card: string;
    cardSm: string;
    cardLg: string; 
  };
  alpha: {
    white: {
      5: string;
      10: string;
      30: string;
      50: string;
      70: string;
      100: string;
    };
    trueWhite: {
      5: string;
      10: string;
      30: string;
      50: string;
      70: string;
      100: string;
    };
    black: {
      5: string;
      10: string;
      30: string;
      50: string;
      70: string;
      100: string;
    };
  };
  secondary: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  };
  primary: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  };
  success: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  };
  warning: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  };
  error: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  };
  info: {
    lighter: string;
    light: string;
    main: string;
    dark: string;
  };
}

export interface CustomGeneral {
  reactFrameworkColor: string;
  borderRadiusSm: string;
  borderRadius: string;
  borderRadiusLg: string;
  borderRadiusXl: string;
}

export interface CustomSidebar {
  background: string;
  boxShadow: string;
  width: string;
  textColor: string;
  dividerBg: string;
  menuItemColor: string;
  menuItemColorActive: string;
  menuItemBg: string;
  menuItemBgActive: string;
  menuItemIconColor: string;
  menuItemIconColorActive: string;
  menuItemHeadingColor: string;
}

export interface CustomHeader {
  height: string;
  background: string;
  boxShadow: string;
  textColor: string;
}

export interface CustomThemeOptions {
  colors: CustomColors;
  general: CustomGeneral;
  sidebar: CustomSidebar;
  header: CustomHeader;
}

export interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}
