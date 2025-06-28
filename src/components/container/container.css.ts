import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '1440px',
  width: '90%',
  margin: '0 auto',
  padding: '0 20px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      padding: '0 16px',
    },
    'screen and (max-width: 480px)': {
      width: '100%',
      padding: '0 12px',
    },
  },
});