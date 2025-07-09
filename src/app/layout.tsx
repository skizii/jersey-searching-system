import 'normalize.css';
import '../styles/theme.css';
import { Inter } from 'next/font/google';
import { defaultThemeClass } from '../styles/defaultTheme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Searching System',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  description: 'Jersey Searching System',
  language: 'en',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.className} ${defaultThemeClass} metadata`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}