import { createTheme, createGlobalTheme } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const defaultThemeClass = createTheme(themeVars, {
    colors: {
      main: '#282C32',
      white: '#ffffff',
      accent: '#F9BF42',
      secondary: '#A9B0BA',
      secondaryLight: '#F6F7F7',
    },
    fonts: {
      main: 'Inter, Arial, sans-serif',
    },
});
  
  createGlobalTheme(`.${defaultThemeClass}`, themeVars);