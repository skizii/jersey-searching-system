// styles/sortSelect.css.ts
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '14px',
  color: '#333333',
  padding: '8px 0',
});

export const label = style({
  flexShrink: 0,
  fontSize: '14px',
  fontWeight: '500',
  color: '#333333',
  userSelect: 'none',
});

export const selectWrapper = style({
  position: 'relative',
});

export const select = style({
  appearance: 'none',
  background: '#ffffff',
  border: '2px solid #e0e0e0',
  borderRadius: '6px',
  fontSize: '14px',
  color: '#333333',
  fontFamily: 'inherit',
  padding: '8px 32px 8px 12px',
  cursor: 'pointer',
  minWidth: '140px',
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
});
