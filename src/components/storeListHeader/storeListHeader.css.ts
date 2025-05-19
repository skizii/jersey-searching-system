import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const storeListHeaderWrapper = style({
	display: 'flex',
	width: '151px',
	height: '46px',
	marginBottom: '24px',
	flexDirection: 'column',
});

export const totalCount = style({
	marginBottom: '8px',
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '18px',
	textAlign: 'left',
	color: themeVars.colors.secondary,
});

export const sort = style({
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '18px',
	color: themeVars.colors.main,
});