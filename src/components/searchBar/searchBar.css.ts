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
  height: '24px',
});

export const icon = style({
  marginRight: '8px',
});

export const input = style({
  border: 'none',
  outline: 'none',
  flex: 1,
  fontSize: '1rem',
  color: themeVars.colors.main,

  selectors: {
    '&::placeholder': {
      color: themeVars.colors.secondary,
    },
  },
});
