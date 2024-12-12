import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const helveticaNeue = localFont({
  src: [
    {
      path: './fonts/HelveticaNeueBlack.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueBlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeueBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueBoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeueHeavy.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueHeavyItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeueItalic.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueLightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeueMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueMediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeueRoman.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueThin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/HelveticaNeueUltraLight.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaNeueUltraLightItalic.otf',
      weight: '100',
      style: 'italic',
    },
  ],
  variable: '--font-helvetica-neue',
});

export const metadata: Metadata = {
  title: 'Crypto Ski Week',
  description:
    'Crypto Ski Week is an event for top blockchain founders, investors, and thought leaders, hosted by Unit Network.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${helveticaNeue.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
