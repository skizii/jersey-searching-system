import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  marginRight: '32px',
  border: '1px solid #f4b740',
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
  color: '#333',

  selectors: {
    '&::placeholder': {
      color: '#a0a0a0',
    },
  },
});
