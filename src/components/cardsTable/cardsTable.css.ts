import { style } from '@vanilla-extract/css';

export const cardsTable = style({
	width: '100%',
	margin: '0 auto 70px auto',
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
	gridRowGap: '16px',
	gridColumnGap: '24px',
	justifyItems: 'start',
	
	'@media': {
		'screen and (max-width: 768px)': {
			gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
			gridRowGap: '16px',
			gridColumnGap: '20px',
			margin: '0 auto 40px auto',
		},
		'screen and (max-width: 480px)': {
			gridTemplateColumns: '1fr',
			margin: '0 auto 32px auto',
		},
	},
});