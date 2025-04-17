'use client'
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Blur from "./Blur"
import * as m from 'motion/react-m'
import MobileMenu from "./MobileMenu"

interface LinkItem {
    href: string;
    label: string;
}

const Header = () => {
    const path = usePathname();
    const isProjectPreviewPage = path.includes('/projects-review/');
    
    const [scroll, setScroll] = useState({ y: 0, lastY: 0, direction: 'up' });
    const [headerVisible, setHeaderVisible] = useState(true);

    const [scrollAmount, setScrollAmount] = useState({oldScroll: 'up', amount: 0});
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            const direction = currentScrollY > scroll.lastY ? 'down' : 'up';
            
            setScroll({
                y: currentScrollY,
                lastY: scroll.y,
                direction
            });
            
            if (direction === 'down' && currentScrollY > 100) {
                setHeaderVisible(false);
            } else if (direction === 'up') {
                setHeaderVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scroll.lastY, scroll.y]);

    const links: LinkItem[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];
    
    if (isProjectPreviewPage) {
        return null;
    }

    const bgOpacity = Math.min(1, scroll.y / 200);

    return (
        <>
            <m.div 
                initial={{
                    opacity: 0,
                    y: -100,
                    scale: 0.8
                }}
                animate={{
                    opacity: 1,
                    y: headerVisible ? 0 : -150,
                    scale: 1
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1.0],
                    y: {
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1.0]
                    }
                }}
                className={cn(
                    "fixed left-0 right-0 md:grid lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_4fr_1fr] flex justify-between items-center py-8 px-4 z-50 h-[110px]"
                )}
                style={{
                    backgroundColor: `rgba(3, 1, 23, ${bgOpacity})`, 
                    boxShadow: `0px 0px 15px 20px rgba(3, 1, 23, ${bgOpacity})`
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
                    <Image src='/icons/global.svg' alt="language switcher icon" width={25} height={25} className="cursor-pointer" />
                </div>
                <div className="md:flex hidden justify-center items-center w-full">
                    <div className="bg-button text-center content-center font-bold text-xs text-white lg:px-10 px-5 lg:text-sm py-6 rounded-3xl cursor-pointer border border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)] text-nowrap">
                        Get Started
                    </div>
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
            <MobileMenu isOpen={menuOpen} />
        </>
    )
}

export default Header