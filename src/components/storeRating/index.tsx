import * as styles from './storeRating.css';
import Image from 'next/image';

export const getTextRating = (rating: number) => {
    let textRating = '';

    if (rating >= 4.5) {
        textRating = 'Excellent';
    } else {
        textRating = 'Good';
    }

    return textRating;
};

export const StoreRating = ({ rating, storeUrl }: { rating: number, storeUrl: string }) => {
    return (
        <>
            <a className={styles.storeRating} href={`https://www.trustpilot.com/review/${storeUrl}`} target="_blank" rel="noopener noreferrer">
                <p className={styles.m0}>{getTextRating(rating)}</p>
                <p className={styles.m0}>{rating} <span style={{ fontWeight: '500' }}>out of 5</span></p>
                <div className={styles.trustpilot}>
                    <Image src="/icons/star.svg" alt="Star" width={16} height={16} />
                    <p className={styles.m0}>Trustpilot</p>
                </div>
            </a>
        </>
    );
};