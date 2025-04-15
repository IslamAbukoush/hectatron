'use client'
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Blur from "./Blur"

interface LinkItem {
    href: string;
    label: string;
}

const Header = () => {
    const path = usePathname();
    const isProjectPreviewPage = path.includes('/projects-review/');
    
    const [scroll, setScroll] = useState({ y: 0, prevY: 0, dir: 'up'});
    const [scrollAmount, setScrollAmount] = useState({oldScroll: 'up', amount: 0});

    useEffect(() => {
        if(scroll.dir !== scrollAmount.oldScroll) {
            setScrollAmount({oldScroll: scroll.dir, amount: 0})
        } else {
            setScrollAmount(prev => ({oldScroll: scroll.dir, amount: prev.amount + scroll.prevY - scroll.y}))
        }
    }, [scroll, scrollAmount.oldScroll])

    // console.log(scrollAmount.amount)

    useEffect(() => {
        const onScroll = () => setScroll(prev => ({y: window.pageYOffset, prevY: prev.y, dir: (prev.y - window.pageYOffset) < 0 ? 'down' : 'up'}));
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links: LinkItem[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];
    if (isProjectPreviewPage) {
        return null;
      }

    return (
        <>
            <div className={cn(`fixed left-0 right-0 md:grid lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_4fr_1fr] flex justify-between items-center py-8 px-4 z-10 h-[100px] transition-transform`, {'translate-y-[-150%]': scroll.dir === 'down'})}>
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
                    <Image src='/icons/global.svg' alt="language switcher icon" width={25} height={25} className="cursor-pointer" />
                </div>
                <div className="md:flex hidden justify-center items-center w-full">
                    <div className="bg-button text-center content-center font-bold text-xs text-white lg:px-10 px-5 lg:text-sm py-6 rounded-3xl cursor-pointer border border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)] text-nowrap">
                        Get Started
                    </div>
                </div>
                <div className="h-[40px] w-[40px] relative flex items-center justify-center md:hidden cursor-pointer">
                    <Image
                        src="/icons/menu.svg"
                        alt="menu icon"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="absolute inset-0 w-full h-full -z-10">
                <Blur className='top-[-450px] left-[50%] -translate-x-1/2 w-[250px] h-[500px] blur-[200px] rounded-full' />
            </div>
            <div className="w-full h-[100px]"></div>
        </>
    )
}

export default Header