import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import Header from '@/app/[locale]/_components/Header';
import Footer from './_components/Footer';
import { Inter } from 'next/font/google'
import Providers from './Providers';
import Alert from './_components/Alert';
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
    <html dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale} className={`${inter.className} w-full overflow-x-hidden `}>
      <body>
        <Providers>
          <Header/>
          {children}
          <Footer />
          <Alert/>
        </Providers>
      </body>
    </html>
  );
}