import { createTheme, createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const defaultThemeClass = createTheme(themeVars, {
    colors: {
      main: '#282C32',
      white: '#ffffff',
      accent: '#F9BF42',
      secondary: '#A9B0BA',
      secondaryLight: '#F6F7F7',
      secondaryWithBg: '#676767',
    },
    fonts: {
      main: 'Inter, Arial, sans-serif',
    },
});

createGlobalTheme(`.${defaultThemeClass}`, themeVars);

// Remove default margins from p and heading tags
globalStyle('p, h1, h2, h3, h4, h5, h6', {
  margin: 0,
});