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
        <div className="md:grid md:grid-cols-[1fr_2fr_1fr] flex justify-between items-center py-8 px-4 z-10">
            <div className="flex md:justify-center justify-start items-center px-0 h-full">
                <Image src='/images/logo.png' alt="Hectatron" width={300} height={100} className="h-full object-contain" />
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
                <Image src='/icons/global.svg' alt="language switcher icon" width={25} height={25} className="absolute right-2 cursor-pointer" />
            </div>
            <div className="md:flex hidden justify-center items-center px-10 w-full">
                <div className="bg-button text-center content-center font-bold text-sm text-white px-10 py-6 rounded-3xl cursor-pointer border border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)] text-nowrap">
                    Get Started
                </div>
            </div>
            <div className="h-[60px] w-[60px] relative flex items-center justify-center md:hidden">
                <Image
                    src="/icons/menu.svg"
                    alt="menu icon"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default Header