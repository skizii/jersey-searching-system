import { style } from "@vanilla-extract/css";

export const favouriteButton = style({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 2,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    '@media': {
        'screen and (max-width: 480px)': {
            transform: 'scale(0.9)',
        },
    },
});