import { style } from '@vanilla-extract/css';

export const headerWrapper = style({
  height: '94px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginBottom: '78px',
  gap: '20px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      height: '80px',
      marginBottom: '40px',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '16px',
    },
    'screen and (max-width: 480px)': {
      height: 'auto',
      marginBottom: '32px',
      gap: '12px',
    },
  },
});

export const logo = style({
  height: '24px',
  width: '59px',
  marginRight: '69px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      marginRight: '0',
      marginLeft: '1px',
      alignSelf: 'flex-start',
    },
    'screen and (max-width: 480px)': {
      height: '20px',
      width: '50px',
      margin: '10px 0'
    },
  },
});

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  gap: '32px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      width: '80%',
      alignItems: 'center',
      gap: '16px',
    },
    'screen and (max-width: 480px)': {
      gap: '12px',
    },
  },
});