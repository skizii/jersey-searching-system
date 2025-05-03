import { style } from '@vanilla-extract/css';

export const headerWrapper = style({
  height: '94px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

export const logo = style({
  height: '24px',
  width: '59px',
  marginLeft: '69px',
});

// export const searchBar = style({
//   height: '46px',
//   width: '500px',
//   padding: '11px 16px',
//   border: `1px solid var(--theme-colors-accent)`, // Используйте CSS-переменные для темы
//   borderRadius: '50%',
//   marginLeft: '32px',
// });

export const filter = style({
  height: '32px',
  width: '32px',
});