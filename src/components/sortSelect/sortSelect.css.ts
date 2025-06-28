// styles/sortSelect.css.ts
import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '14px',
  color: '#333333',
  padding: '8px 0',
  
  '@media': {
    'screen and (max-width: 480px)': {
      gap: '8px',
      fontSize: '13px',
    },
  },
});

export const label = style({
  flexShrink: 0,
  fontSize: '14px',
  fontWeight: '500',
  color: '#333333',
  userSelect: 'none',
  
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: '13px',
    },
  },
});

export const selectWrapper = style({
  position: 'relative',
});

export const select = style({
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  fontSize: '14px',
  color: themeVars.colors.text,
  fontFamily: 'inherit',
  padding: '8px 32px 8px 12px',
  cursor: 'pointer',
  minWidth: '80px',
  transition: 'all 0.2s ease',

  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: '#007bff',
      boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)',
    },
    '&:hover': {
      borderColor: '#007bff',
    },
  },
  
  '@media': {
    'screen and (max-width: 768px)': {
      minWidth: '120px',
      padding: '6px 28px 6px 10px',
    },
    'screen and (max-width: 480px)': {
      minWidth: '100px',
      fontSize: '13px',
      padding: '5px 24px 5px 8px',
    },
  },
});

export const icon = style({
  position: 'absolute',
  top: '50%',
  right: '8px',
  width: '16px',
  height: '16px',
  transform: 'translateY(-50%)',
  backgroundImage: `url("/icons/arrow-down.svg")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  transition: 'transform 0.2s ease',
  pointerEvents: 'none',
  
  selectors: {
    [`${select}:focus + &`]: {
      transform: 'translateY(-50%) rotate(180deg)',
    },
  },
  
  '@media': {
    'screen and (max-width: 480px)': {
      right: '6px',
      width: '14px',
      height: '14px',
    },
  },
});
