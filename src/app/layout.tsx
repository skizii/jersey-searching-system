import 'normalize.css';
import '../styles/theme.css';
import { Inter } from 'next/font/google';
import { defaultThemeClass } from '../styles/defaultTheme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Searching System',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${defaultThemeClass} ${inter.className}`}>{children}</body>
    </html>
  );
}