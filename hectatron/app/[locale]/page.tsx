import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/" locale='en'>en {t('about')}</Link>
      <br />
      <Link href="/" locale='ru'>ru {t('about')}</Link>
      <br />
      <Link href="/" locale='ro'>ro {t('about')}</Link>
    </div>
  );
}