import { style } from '@vanilla-extract/css';

export const filterDropdown = style({
  position: 'absolute',
  top: 'calc(100% + 8px)',
  right: '0',
  zIndex: 1000,
  backgroundColor: '#ffffff',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  minWidth: '280px',
  padding: '20px',
  transform: 'translateY(0)',
  animation: 'fadeIn 0.2s ease-out',
  
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-6px',
      right: '12px',
      width: '12px',
      height: '12px',
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      borderBottom: 'none',
      borderRight: 'none',
      transform: 'rotate(45deg)',
      zIndex: -1,
    },
  },
  
  '@media': {
    'screen and (max-width: 768px)': {
      right: '-50px',
      minWidth: '260px',
      padding: '16px',
    },
    'screen and (max-width: 480px)': {
      right: '-100px',
      minWidth: '240px',
      padding: '12px',
      borderRadius: '6px',
    },
  },
});

export const filterSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      gap: '16px',
    },
    'screen and (max-width: 480px)': {
      gap: '12px',
    },
  },
});

export const filterTitle = style({
  margin: '0 0 12px 0',
  fontSize: '18px',
  fontWeight: '600',
  color: '#333333',
  borderBottom: '2px solid #f0f0f0',
  paddingBottom: '12px',
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '16px',
      margin: '0 0 10px 0',
      paddingBottom: '10px',
    },
    'screen and (max-width: 480px)': {
      fontSize: '14px',
      margin: '0 0 8px 0',
      paddingBottom: '8px',
    },
  },
});

export const filterOption = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  
  '@media': {
    'screen and (max-width: 480px)': {
      gap: '8px',
    },
  },
});

export const filterLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#333333',
  padding: '8px 0',
  transition: 'all 0.2s ease',
  
  selectors: {
    '&:hover': {
      color: '#666666',
    },
  },
  
  '@media': {
    'screen and (max-width: 480px)': {
      gap: '8px',
      fontSize: '13px',
      padding: '6px 0',
    },
  },
});

export const filterText = style({
  fontSize: '14px',
  fontWeight: '500',
  color: '#333333',
  userSelect: 'none',
  
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: '13px',
    },
  },
});

export const filterCheckbox = style({
  width: '14px',
  height: '14px',
  cursor: 'pointer',
  accentColor: '#007bff',
  border: '2px solid #e0e0e0',
  borderRadius: '3px',
  transition: 'all 0.2s ease',
  appearance: 'none',
  WebkitAppearance: 'none',
  background: '#fff',
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'middle',

  selectors: {
    '&:checked': {
      borderColor: '#007bff',
      backgroundColor: '#007bff',
      // backgroundImage:
      //   "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 14 14\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M3 7l3 3 5-5\' stroke=\'white\' stroke-width=\'2\' fill=\'none\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/></svg>')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '12px 12px',
    },
    '&:hover': {
      borderColor: '#007bff',
    },
  },
  
  '@media': {
    'screen and (max-width: 480px)': {
      width: '12px',
      height: '12px',
      backgroundSize: '10px 10px',
    },
  },
});

export const filterSelect = style({
  padding: '8px 12px',
  border: '2px solid #e0e0e0',
  borderRadius: '6px',
  fontSize: '14px',
  backgroundColor: '#ffffff',
  color: '#333333',
  cursor: 'pointer',
  minWidth: '140px',
  transition: 'all 0.2s ease',
  
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: '#007bff',
      boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)',
    },
    '&:hover': {
      borderColor: '#007bff',
    },
  },
  
  '@media': {
    'screen and (max-width: 768px)': {
      minWidth: '120px',
      padding: '6px 10px',
    },
    'screen and (max-width: 480px)': {
      minWidth: '100px',
      fontSize: '13px',
      padding: '5px 8px',
    },
  },
});

export const visuallyHiddenCheckbox = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
  margin: 0,
  padding: 0,
  pointerEvents: 'auto',
  minWidth: 'unset',
  minHeight: 'unset',
});

export const customCheckbox = style({
  width: '14px',
  height: '14px',
  minWidth: '14px',
  minHeight: '14px',
  border: '2px solid #e0e0e0',
  borderRadius: '3px',
  background: '#fff',
  display: 'inline-block',
  verticalAlign: 'middle',
  transition: 'all 0.2s ease',
  position: 'relative',
  cursor: 'pointer',
  selectors: {
    '[data-checked="true"]&': {
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      // backgroundImage:
      //   "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 14 14\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M3 7l3 3 5-5\' stroke=\'white\' stroke-width=\'2\' fill=\'none\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/></svg>')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '12px 12px',
    },
    '&:hover': {
      borderColor: '#007bff',
    },
  },
  '@media': {
    'screen and (max-width: 480px)': {
      width: '12px',
      height: '12px',
      minWidth: '12px',
      minHeight: '12px',
      backgroundSize: '10px 10px',
    },
  },
}); 