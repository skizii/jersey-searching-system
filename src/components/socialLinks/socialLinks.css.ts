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

export const icon = style({
  transition: 'filter 0.2s ease',
  selectors: {
    [`${link}:hover &`]: {
      filter: 'brightness(0) saturate(100%) invert(15%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)',
    },
  },
});