import { useTranslations } from 'next-intl';
import Home from '@/components/Home';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className=''>
      <Home/>
    </div>
  );
}