import { createThemeContract } from '@vanilla-extract/css';

export const themeVars = createThemeContract({
  colors: {
    main: null,
    white: null,
    accent: null,
    secondary: null,
    secondaryLight: null,
    secondaryWithBg: null,
  },
  fonts: {
    main: null,
  },
});