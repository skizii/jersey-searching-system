import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const storeCard = style({
  display: 'flex',
  width: '395px',
  height: '468px',
  padding: '16px',
  backgroundColor: themeVars.colors.secondary,
});