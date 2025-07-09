import { style } from '@vanilla-extract/css';

export const storeRating = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '12px',
    textAlign: 'center',
    gap: '13px',
    color: '#000',
    textDecoration: 'none',
    
    '@media': {
        'screen and (max-width: 768px)': {
            width: '70%',
            justifyContent: 'end',
            flexWrap: 'wrap',
            gap: '10px',
        },
        'screen and (max-width: 480px)': {
            gap: '8px',
            fontSize: '11px',
        },
    },
});

export const m0 = style({
    margin: 0,
});

export const trustpilot = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '6px',
    
    '@media': {
        'screen and (max-width: 480px)': {
            gap: '4px',
        },
    },
});