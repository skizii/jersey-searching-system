import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  marginRight: '32px',
  border: `1px solid ${themeVars.colors.accent}`,
  borderRadius: '9999px',
  padding: '11px 16px',
  width: '100%',
  maxWidth: '500px',
  height: '46px', 
  
  '@media': {
    'screen and (max-width: 768px)': {
      marginRight: '0',
      maxWidth: '100%',
      height: '48px',
      padding: '12px 16px',
    },
    'screen and (max-width: 480px)': {
      height: '44px',
      padding: '10px 14px',
    },
  },
});

export const icon = style({
  marginRight: '8px',
  
  '@media': {
    'screen and (max-width: 480px)': {
      marginRight: '6px',
    },
  },
});

export const input = style({
  border: 'none',
  outline: 'none',
  flex: 1,
  fontSize: '1rem',
  color: themeVars.colors.main,
  background: 'transparent',

  selectors: {
    '&::placeholder': {
      color: themeVars.colors.secondary,
    },
  },
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '16px', // Prevents zoom on iOS
    },
    'screen and (max-width: 480px)': {
      fontSize: '14px',
    },
  },
});
