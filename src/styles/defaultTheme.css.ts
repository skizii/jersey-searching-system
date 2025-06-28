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

// Add responsive improvements
globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  overflowX: 'hidden',
});

// Touch-friendly improvements
globalStyle('button, a, select, input', {
  minHeight: '44px',
  minWidth: '44px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      minHeight: '40px',
      minWidth: '40px',
    },
    'screen and (max-width: 480px)': {
      minHeight: '36px',
      minWidth: '36px',
    },
  },
});

// Prevent text selection on interactive elements
globalStyle('button, a', {
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
});

// Smooth scrolling
globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('button, a, select, input', {
  minHeight: 'unset',
  minWidth: 'unset',
});