import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const storeCardWrapper = style({
  margin: '0 auto',
  width: '395px',
  height: '468px',
  marginBottom: '24px',
});

export const storeCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '16px',
});

export const storeInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginBottom: '16px',
});

export const storeInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  width: '100%',
});

export const storeHeaderWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const labelsWrapper = style({
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '24px',
  width: '52px',
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

export const storeName = style({
  margin: '16px 0 16px 0',
  color: themeVars.colors.main,
  fontSize: '25px',
  fontWeight: '400',
  lineHeight: '30px',
  textAlign: 'center',
});

export const storeAssortment = style({
  marginBottom: '32px',
  display: 'flex',
  gap: '8px',
  justifyContent: 'start',
  alignItems: 'center',
  width: '100%',
  color: themeVars.colors.secondaryWithBg,
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '15px',
  textAlign: 'center',
});

export const storeContacts = style({
  marginBottom: '32px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  width: '100%',
  gap: '8px',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '15px',
  textAlign: 'center',
});

export const storeContact = style({
  textDecoration: 'none',
  color: themeVars.colors.secondaryWithBg,
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  selectors: {
    '&:hover': {
      color: themeVars.colors.main,
    },
  },
});

export const contactBlock = style({
  display: 'flex',
  alignItems: 'center',

  gap: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  selectors: {
    '&:hover': {
      color: themeVars.colors.main,
    },
  },
});

export const contactIcon = style({
  transition: 'filter 0.2s ease',
  selectors: {
    [`${contactBlock}:hover &`]: {
      filter: 'brightness(0) saturate(100%) invert(15%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)',
    },
  },
});

export const hoverCard = style({
  width: '100%',
  height: '100%',
  padding: '16px',
  backgroundColor: themeVars.colors.secondaryLight,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  borderRadius: '16px',
});