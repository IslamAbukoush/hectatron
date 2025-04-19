'use client'
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils";
import Image from "next/image"
import * as m from 'motion/react-m'
import { socialIconAnimation } from "@/lib/animations/constactAnimations";
import { textAnimation } from "@/lib/animations/buttonAnimation";
import NewsLetter from "./NewsLetter";
import { useTranslations } from "next-intl";

interface MediaType {
    src: string;
    alt: string;
    link: string;
}

const media: MediaType[] = [
    { src: '/icons/telegram.svg', alt: 'telegram', link: 'https://www.linkedin.com/company/hecatron/' },
    { src: '/icons/google.svg', alt: 'google', link: 'https://www.linkedin.com/company/hecatron/' },
    { src: '/icons/instagram.svg', alt: 'instagram', link: 'https://www.linkedin.com/company/hecatron/' },
    { src: '/icons/facebook.svg', alt: 'facebook', link: 'https://www.linkedin.com/company/hecatron/' },
]

const Footer = () => {
    const t = useTranslations('footer');
    const path = usePathname();
    const isProjectPreviewPage = path.includes('/projects-review/');
    if (isProjectPreviewPage) {
        return null;
    }
    const pages = [
        { text: t('home'), link: '/' },
        { text: t('privacyPolicy'), link: '/privacy-policy' },
        { text: t('termsOfUse'), link: '/terms-of-use' },
    ];
    return (
        <div className={cn("flex flex-col gap-10 px-4 xs:px-8 sm:px-20 py-[30px] bg-gradient-to-t from-[#040411] to-[#1A1A32]")}>
            <div className={cn("grid grid-cols-2 gap-10", "max-lg:grid-cols-1")}>
                <div className={cn("flex items-center justify-start", "max-lg:justify-center")}>
                    <Image src="/images/logo_text.png" alt="logo" width={300} height={100} className="opacity-60 w-2/3" />
                </div>
                <NewsLetter />
            </div>
            <hr className="border-[1px] border-[#D86A15]" />
            <div className={cn("flex max-lg:flex-col gap-4 items-center justify-between text-white/80 font-semibold", "max-sm:text-sm")}>
                <p>{t('copyright')}</p>
                <div className="flex gap-4 xs:gap-10 items-center justify-center">
                    {pages.map((item, index) => (
                        <m.div 
                        variants={textAnimation}
                        initial='hidden'
                        animate='visible'
                        whileHover='hover'
                        key={index} className="cursor-pointer">
                            <Link href={item.link}>{item.text}</Link>
                        </m.div>
                    ))}
                </div>
                <div className="flex gap-4 items-center justify-center">
                    {media.map((item, index) => (
                        <m.div
                        variants={socialIconAnimation} initial='hidden' animate='visible' whileHover="hover" className="cursor-pointer"
                        key={index}>
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            <Image src={item.src} alt={item.alt} width={30} height={30} />
                        </Link>
                        </m.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer