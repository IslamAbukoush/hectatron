import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import Header from '@/components/Header';
import { Inter } from 'next/font/google'
import Providers from './Providers';
const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.className}`}>
      <body>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}