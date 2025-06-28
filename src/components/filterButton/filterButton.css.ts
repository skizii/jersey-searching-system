import { style } from '@vanilla-extract/css';

export const filterButton = style({
	height: '32px',
	width: '32px',
	border: 'none',
	background: 'none',
	cursor: 'pointer',
	borderRadius: '4px',
	transition: 'all 0.2s ease',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	
	selectors: {
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.05)',
		},
		'&:active': {
			backgroundColor: 'rgba(0, 0, 0, 0.1)',
		},
	},
});