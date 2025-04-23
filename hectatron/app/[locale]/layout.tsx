import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next'
import './globals.css';
import Header from '@/app/[locale]/_components/Header';
import Footer from './_components/Footer';
import { Inter, Tajawal } from 'next/font/google'
import Providers from './Providers';
import Alert from './_components/Alert';
const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });
const tajawal = Tajawal({weight: ['400', '500', '700'], subsets: ['arabic'], variable: '--font-tajawal' });

export const metadata: Metadata = {
  title: 'Hectatron',
  description: 'Hectatron builds high-performance, SEO-optimized web applications using Next.js. We create fast, responsive, and scalable digital experiences tailored for modern businesses.',
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale} className={`${inter.variable} ${tajawal.variable} w-full overflow-x-hidden `}>
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