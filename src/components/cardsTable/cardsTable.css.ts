import { style } from '@vanilla-extract/css';

export const cardsTable = style({
	width: '100%',
	margin: '0 auto',
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
	gridRowGap: '16px',
	gridColumnGap: '24px',
});