import Image from 'next/image';
import * as styles from './socialLinks.css';

type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

type Props = {
  socialMedia: SocialLink[];
  clickable?: boolean;
};

const platformIcons: Record<string, string> = {
  facebook: '/icons/social/fb.svg',
  twitter: '/icons/social/twitter.svg',
  instagram: '/icons/social/ig.svg',
  threads: '/icons/social/threads.svg',
  pinterest: '/icons/social/pinterest.svg',
  tiktok: '/icons/social/tt.svg',
  linkedin: '/icons/social/linkedin.svg',
  youtube: '/icons/social/yt.svg',
};

export const SocialLinks: React.FC<Props> = ({ socialMedia, clickable = true }) => (
    <div className={styles.wrapper}>
    {socialMedia.map(({ platform, url }) => {
      const iconSrc = platformIcons[platform];

      if (!iconSrc) return null; // защита на случай отсутствия иконки

      return clickable ? (
        <a
          key={platform}
          href={url}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={iconSrc}
            alt={platform}
            width={24}
            height={24}
            className={styles.icon}
          />
        </a>
      ) : (
        <a
          key={platform}
          href={url}
          className={styles.link}
          tabIndex={-1}
          style={{ pointerEvents: 'none', opacity: 0.5 }}
          aria-disabled="true"
        >
          <Image
            src={iconSrc}
            alt={platform}
            width={24}
            height={24}
            className={styles.icon}
          />
        </a>
      );
    })}
  </div>
);