import 'normalize.css';
import '../styles/theme.css';
import { Inter } from 'next/font/google';
import { defaultThemeClass } from '../styles/defaultTheme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Searching System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${defaultThemeClass} ${inter.className}`}>{children}</body>
    </html>
  );
}