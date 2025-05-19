// styles/sortSelect.css.ts
import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '16px',
  color: themeVars.colors.main,
});

export const label = style({
  flexShrink: 0,
});

export const selectWrapper = style({
  position: 'relative',
});

export const select = style({
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  fontSize: '16px',
  color: themeVars.colors.main,
  fontFamily: 'inherit',
  paddingRight: '24px',
  cursor: 'pointer',

  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const icon = style({
  position: 'absolute',
  top: '50%',
  right: '4px',
  width: '16px',
  height: '16px',
  transform: 'translateY(-50%)',
  backgroundImage: `url("/icons/arrow-down.svg")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  transition: 'transform 0.2s ease',
  pointerEvents: 'none',
});
