import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

import Blur from "./Blur"
import LanguageSwitcher from "./LanguageSwitcher"

const pages = [
    { text: 'Home', link: '/', icon: '/icons/home.svg' },
    { text: 'About', link: '/about', icon: '/icons/about.svg' },
    { text: 'Projects', link: '/projects', icon: '/icons/projects.svg' },
    { text: 'Contact', link: '/contact', icon: '/icons/contact.svg' },
]
export default function MobileMenu({ isOpen, path }: { isOpen: boolean, path: string }) {
    return (
        <div className={cn(`fixed top-0 left-0 right-0 bg-background z-40 h-screen grid grid-rows-[100px_1fr_1fr] px-4`, { 'hidden': !isOpen, 'no-doc-scroll': isOpen })}>
            <div></div>
            <div className="flex justify-center items-center">
                <div className="inline-flex flex-col relative">
                    <Blur className="w-[200px] h-[200px] blur-[100px] opacity-70 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0" />
                    {pages.map((page, i) => (
                        <Link href={page.link} key={page.text} className={cn(`flex items-center gap-4 py-5 px-3 z-10 text-[#ffffff9f]`, { 'border-b border-[#ffffff9f]': i !== pages.length - 1, 'text-white': path === page.link })}>
                            <Image src={page.icon} alt={page.text} width={30} height={30} className={cn(`h-auto w-7 opacity-70`, { 'opacity-100': path === page.link })} />
                            <p className="text-xl">{page.text}</p>
                        </Link>
                    ))}
                    <div className="flex items-center justify-center gap-2 pt-6">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-5 pb-6">
                <Link className="
                z-10 bg-button text-center font-bold text-white border-[1px] border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)]
                text-xs px-8 py-4 rounded-[16px] w-full
              " href={'/contact'}>
                    Get Started
                </Link>
                <div className="flex justify-center gap-8">
                    <Link href={'/terms-of-use'} className="text-xs text-white">Terms of Service</Link>
                    <Link href={'/privacy-policy'} className="text-xs text-white">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}