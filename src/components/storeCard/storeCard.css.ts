import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const storeCardWrapper = style({
  margin: '0 auto',
  width: '395px',
  height: '468px',
});

export const storeCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '16px',
});

export const labelsWrapper = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  height: '32x',
  width: '100%',
});

export const storeBadge = style({
  width: '44px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px 8px',
  marginRight: '9px',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '15px',
  textAlign: 'center',
  backgroundColor: themeVars.colors.accent,
  borderRadius: '4px',

  selectors: {
    '&::after': {
      content: '"New"',
    },
  },
});

export const storeLink = style({
  marginTop: '16px',
  color: themeVars.colors.secondary,
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '15px',
  textAlign: 'center',
  textDecoration: 'none',
})

export const storeAdress = style({
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '18px',
  textAlign: 'center',
});

export const storeHeader = style({
  margin: '16px 0 0 0',
  color: themeVars.colors.main,
  fontSize: '25px',
  fontWeight: '400',
  lineHeight: '30px',
  textAlign: 'center',
});

export const hoverCard = style({
  width: '100%',
  height: '100%',
  padding: '16px',
  backgroundColor: themeVars.colors.secondaryLight,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  borderRadius: '16px',
});