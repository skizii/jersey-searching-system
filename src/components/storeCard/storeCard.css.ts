import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const storeCardWrapper = style({
  margin: '0 auto',
  width: '395px',
  height: '468px',
  marginBottom: '24px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      maxWidth: '350px',
      height: '420px',
      marginBottom: '20px',
    },
    'screen and (max-width: 480px)': {
      width: '100%',
      maxWidth: '100%',
      height: '380px',
      marginBottom: '16px',
    },
  },
});

export const storeCard = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '16px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '12px',
    },
    'screen and (max-width: 480px)': {
      padding: '10px',
    },
  },
});

export const storeInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginBottom: '16px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      marginBottom: '12px',
    },
    'screen and (max-width: 480px)': {
      marginBottom: '10px',
    },
  },
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
  
  '@media': {
    'screen and (max-width: 480px)': {
      height: '20px',
      width: '48px',
    },
  },
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
  
  '@media': {
    'screen and (max-width: 480px)': {
      width: '40px',
      height: '20px',
      fontSize: '12px',
      lineHeight: '14px',
      padding: '3px 6px',
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
  
  '@media': {
    'screen and (max-width: 768px)': {
      marginTop: '12px',
      fontSize: '12px',
      lineHeight: '14px',
    },
    'screen and (max-width: 480px)': {
      marginTop: '10px',
      fontSize: '11px',
      lineHeight: '13px',
    },
  },
});

export const storeAdress = style({
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '18px',
  textAlign: 'center',
  
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
});

export const storeName = style({
  margin: '16px 0 16px 0',
  color: themeVars.colors.main,
  fontSize: '25px',
  fontWeight: '400',
  lineHeight: '30px',
  textAlign: 'center',
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '22px',
      lineHeight: '26px',
      margin: '12px 0 12px 0',
    },
    'screen and (max-width: 480px)': {
      fontSize: '20px',
      lineHeight: '24px',
      margin: '10px 0 10px 0',
    },
  },
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
  textAlign: 'start',
});

export const storeContact = style({
  display: 'contents',
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
  
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '12px',
      borderRadius: '12px',
    },
    'screen and (max-width: 480px)': {
      padding: '10px',
      borderRadius: '8px',
    },
  },
});

export const imageContainer = style({
  width: '248px',
  height: '248px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  '@media': {
    'screen and (max-width: 768px)': {
      height: '200px',
    },
    'screen and (max-width: 480px)': {
      height: '180px',
    },
  },
});