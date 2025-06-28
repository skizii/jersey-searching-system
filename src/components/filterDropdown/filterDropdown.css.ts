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
});

export const filterSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const filterTitle = style({
  margin: '0 0 12px 0',
  fontSize: '18px',
  fontWeight: '600',
  color: '#333333',
  borderBottom: '2px solid #f0f0f0',
  paddingBottom: '12px',
});

export const filterOption = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
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
});

export const filterText = style({
  fontSize: '14px',
  fontWeight: '500',
  color: '#333333',
  userSelect: 'none',
});

export const filterCheckbox = style({
  width: '18px',
  height: '18px',
  cursor: 'pointer',
  accentColor: '#007bff',
  border: '2px solid #e0e0e0',
  borderRadius: '3px',
  transition: 'all 0.2s ease',
  
  selectors: {
    '&:checked': {
      borderColor: '#007bff',
    },
    '&:hover': {
      borderColor: '#007bff',
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
}); 