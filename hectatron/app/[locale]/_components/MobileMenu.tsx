import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import Blur from "./Blur"
const pages = [
    { text: 'Home', link: '/', icon: '/icons/home.svg' },
    { text: 'About', link: '/about', icon: '/icons/about.svg' },
    { text: 'Projects', link: '/projects', icon: '/icons/projects.svg' },
    { text: 'Contact', link: '/contact', icon: '/icons/contact.svg' },
]
export default function MobileMenu({ isOpen }: { isOpen: boolean }) {
    return (
        <div className={cn(`fixed top-0 left-0 right-0 bg-background z-40 h-screen grid grid-rows-[100px_1fr_1fr] px-4`, { 'hidden': !isOpen })}>
            <div></div>
            <div className="flex justify-center items-center">
                <div className="inline-flex flex-col relative">
                    <Blur className="w-[200px] h-[200px] blur-[100px] opacity-70 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"/>
                    {pages.map((page, i) => (
                        <div key={page.text} className={cn(`flex items-center gap-2 py-3 px-3`, { 'border-b border-white': i !== pages.length - 1 })}>
                            <Image src={page.icon} alt={page.text} width={30} height={30} className="w-auto h-full" />
                            <Link href={page.link} className="text-3xl text-white">{page.text}</Link>
                        </div>
                    ))}
                    <div className="flex items-center justify-center gap-2 pt-6">
                        <Image alt="global" src={'/icons/global.svg'} width={50} height={50} />
                        <p className="text-white text-2xl">EN</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-5 pb-6">
                <div className="
                z-10 bg-button text-center font-bold text-white border-[1px] border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)]
                text-xs px-8 py-4 rounded-[16px] w-full
              ">
                    Get Started
                </div>
                <div className="flex justify-center gap-8">
                    <Link href={'/terms-of-use'} className="text-xs text-white">Terms of Service</Link>
                    <Link href={'/privacy-policy'} className="text-xs text-white">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}