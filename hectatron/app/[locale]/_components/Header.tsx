'use client'
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Blur from "./Blur"
import MobileMenu from "./MobileMenu"
import { useWindowSize } from "@/lib/hooks/useWindowSize"
import LanguageSwitcher from "./LanguageSwitcher"
import * as m from 'motion/react-m'
import { buttonAnimation } from "@/lib/animations/buttonAnimation"
import { useTranslations } from "next-intl" // Import the translation hook

interface LinkItem {
    href: string;
    label: string;
}

const Header = () => {
    const t = useTranslations(); // Initialize the translation hook
    const path = usePathname();
    const isProjectPreviewPage = path.includes('/projects-review/');

    const [width, height] = useWindowSize();
    const [scroll, setScroll] = useState({ y: 0, prevY: 0, dir: 'up' });
    const [scrollAmount, setScrollAmount] = useState({ oldScroll: 'up', amount: 0 });
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(prev => prev ? width < 768 : prev);
    }, [width])

    useEffect(() => {
        setMenuOpen(false);
    }, [path])

    useEffect(() => {
        if (scroll.dir !== scrollAmount.oldScroll) {
            setScrollAmount({ oldScroll: scroll.dir, amount: 0 })
        } else {
            setScrollAmount(prev => ({ oldScroll: scroll.dir, amount: prev.amount + scroll.prevY - scroll.y }))
        }
    }, [scroll, scrollAmount.oldScroll])

    useEffect(() => {
        const onScroll = () => setScroll(prev => ({ y: window.pageYOffset, prevY: prev.y, dir: (prev.y - window.pageYOffset) < 0 ? 'down' : 'up' }));
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Define links with translated labels
    const links: LinkItem[] = [
        { href: '/', label: t('header.navigation.home') },
        { href: '/about', label: t('header.navigation.about') },
        { href: '/projects', label: t('header.navigation.projects') },
        { href: '/contact', label: t('header.navigation.contact') },
    ];

    if (isProjectPreviewPage) {
        return null;
    }

    return (
        <m.div
        initial={{opacity: 0, scale: 0.5, y: -100}}
        animate={{opacity: 1, scale: 1, y: 0}}
        transition={{ duration: 0.5}}>
            <m.div 
            className={cn(`fixed left-0 right-0 md:grid lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_4fr_1fr] flex justify-between items-center py-8 px-4 z-50 h-[110px] transition-transform`, { 'translate-y-[-150%]': scroll.dir === 'down' && scroll.y > 100 })}
                style={{
                    backgroundColor: `rgba(3, 1, 23, ${Math.min(+!menuOpen, scroll.y / 200)})`,
                    boxShadow: `0px 0px 15px 20px rgba(3, 1, 23, ${Math.min(+!menuOpen, scroll.y / 200)})`
                }}
            >
                <div className="relative h-full w-full flex justify-start md:justify-center items-center md:px-5">
                    <div className="relative w-full h-full flex justify-start">
                        <Link href={'/'} className="relative w-full h-full flex justify-start">
                            <Image
                                src='/images/logo_text.png'
                                alt="Hectatron logo"
                                width={200}
                                height={200}
                                className="object-contain opacity-45 lg:block md:hidden block"
                            />
                        </Link>

                        <Image
                            src='/images/logo_no_text.png'
                            alt="Hectatron logo"
                            fill
                            className="object-contain opacity-45 lg:hidden md:block hidden"
                        />
                    </div>
                </div>

                <div className="relative h-full md:flex hidden justify-around items-center bg-white/11 px-10 rounded-3xl lg:px-16">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className={cn("text-sm text-white opacity-45 py-3", path === link.href && "opacity-100")}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <LanguageSwitcher />
                </div>
                <div className="md:flex hidden justify-center items-center w-full">
                    <m.div 
                    variants={buttonAnimation}
                    initial='hidden'
                    animate='visible'
                    whileHover='hover'
                    className="bg-button text-center content-center font-bold text-xs text-white lg:px-10 px-5 lg:text-sm py-6 rounded-3xl cursor-pointer border border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)] text-nowrap">
                        <Link href='/contact'>{t('header.getStarted')}</Link>
                    </m.div>
                </div>
                <div className="h-[40px] w-[40px] relative flex items-center justify-center md:hidden cursor-pointer" onClick={() => setMenuOpen(prev => !prev)}>
                    <Image
                        src="/icons/menu.svg"
                        alt="menu icon"
                        fill
                        className="object-contain"
                    />
                </div>
            </m.div>
            <div className="absolute inset-0 w-full h-full -z-10">
                <Blur className='top-[-450px] left-[50%] -translate-x-1/2 w-[250px] h-[500px] blur-[200px] rounded-full' />
            </div>
            <div className="w-full h-[100px]"></div>
            <MobileMenu isOpen={menuOpen} path={path} />
        </m.div>
    )
}

export default Header