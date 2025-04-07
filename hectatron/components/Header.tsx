'use client'
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

interface LinkItem {
  href: string;
  label: string;
}

const Header = () => {
    const path = usePathname();
    
    const links: LinkItem[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];
    
    return (
        <div className="grid grid-cols-[1fr_2fr_1fr] py-8 px-4 z-10">
            <div className="flex justify-center items-center px-10">
                <Image src='/images/logo.png' alt="Hectatron" width={300} height={100} className="w-full" />
            </div>
            <div className="relative flex justify-around items-center bg-white/11 px-[15%] rounded-[24px]">
                {links.map((link, i) => (
                    <Link 
                        key={i} 
                        href={link.href} 
                        className={cn("text-sm text-white opacity-45 py-3", path === link.href && "opacity-100")}
                    >
                        {link.label}
                    </Link>
                ))}
                
                <Image src='/icons/global.svg' alt="language switcher icon" width={25} height={25} className="absolute right-5 cursor-pointer" />
            </div>
            <div className="flex justify-center items-center px-10">
                <div className="bg-button text-center content-center font-bold text-sm text-white px-10 py-6 rounded-[24px] cursor-pointer border-[1px] border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)]">
                    Get Started
                </div>
            </div>
        </div>
    )
}

export default Header