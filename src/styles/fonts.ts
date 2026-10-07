import { Cormorant_Garamond, Inter, Noto_Sans_Devanagari } from 'next/font/google';

export const fontSerif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-cormorant',
  display: 'optional',
  adjustFontFallback: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

export const fontSans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'optional',
  adjustFontFallback: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const fontHindi = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hindi',
  display: 'optional',
  adjustFontFallback: false,
  fallback: ['system-ui', 'sans-serif'],
});

export const fontMono = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'optional',
  adjustFontFallback: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});