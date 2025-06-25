import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  gap: '16px',
});

export const link = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
});