import { style } from '@vanilla-extract/css';
import { themeVars } from '@/styles/theme.css';

export const storeListHeaderWrapper = style({
	display: 'flex',
	width: '151px',
	height: '46px',
	marginBottom: '24px',
	flexDirection: 'column',
	
	'@media': {
		'screen and (max-width: 768px)': {
			width: '100%',
			height: 'auto',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: '20px',
		},
		'screen and (max-width: 480px)': {
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: '12px',
			marginBottom: '16px',
		},
	},
});

export const totalCount = style({
	marginBottom: '8px',
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '18px',
	textAlign: 'left',
	color: themeVars.colors.secondary,
	
	'@media': {
		'screen and (max-width: 768px)': {
			marginBottom: '0',
		},
		'screen and (max-width: 480px)': {
			fontSize: '14px',
			lineHeight: '16px',
		},
	},
});

export const sort = style({
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '18px',
	color: themeVars.colors.main,
	
	'@media': {
		'screen and (max-width: 480px)': {
			fontSize: '14px',
			lineHeight: '16px',
		},
	},
});