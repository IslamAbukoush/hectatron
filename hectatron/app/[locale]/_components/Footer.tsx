'use client'
import { Link, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils";
import Image from "next/image"

interface MediaType {
    src: string;
    alt: string;
    link: string;
}

const media : MediaType[] = [
    { src: '/icons/telegram.svg', alt: 'telegram', link: 'https://www.linkedin.com/company/hecatron/' },
    { src: '/icons/google.svg', alt: 'google', link: 'https://www.linkedin.com/company/hecatron/' },
    { src: '/icons/instagram.svg', alt: 'instagram', link: 'https://www.linkedin.com/company/hecatron/' },
    { src: '/icons/facebook.svg', alt: 'facebook', link: 'https://www.linkedin.com/company/hecatron/' },
]

interface PageType {
    text: string;
    link: string;
}

const pages : PageType[] = [
    { text: 'Home', link: '/' },
    { text: 'Privacy Policy', link: '/privacy-policy' },
    { text: 'Terms of use', link: '/terms-of-use' },
]

const Footer = () => {
    const path = usePathname();
    const isProjectPreviewPage = path.includes('/projects-review/');
    if (isProjectPreviewPage) {
        return null;
    }
  return (
    <div className={cn("flex flex-col gap-10 px-4 xs:px-8 sm:px-20 py-[30px] bg-gradient-to-t from-[#040411] to-[#1A1A32]")}>
        <div className={cn("grid grid-cols-2 gap-10", "max-lg:grid-cols-1")}>
            <div className={cn("flex items-center justify-start", "max-lg:justify-center")}>
                <Image src="/images/logo_text.png" alt="logo" width={300} height={100} className="opacity-60 w-2/3"/>
            </div>
            <div className="px-5 xs:px-12 py-6 flex flex-col gap-4 items-start inner-shadow rounded-[24px] border-2 border-[#D86A15]/20">
                <h3 className={cn("text-lg font-semibold text-white/80", "max-sm:text-base")}>Subscribe to our newsletter!</h3>
                <div className="w-full flex gap-4 items-center justify-between">
                    <input type="email" placeholder="example@email.com" className={cn("w-full p-4 max-sm:p-2 rounded-[20px] items-center bg-white border-1 border-[#D86A15]/60 placeholder:text-black/40 placeholder:text-lg placeholder:font-semibold", "max-sm:placeholder:text-sm")}/>
                    <Image src="/icons/arrow-right.svg" alt="arrow" width={50} height={50}  />
                </div>
            </div>
        </div>
        <hr className="border-[1px] border-[#D86A15]"/>
        <div className={cn("flex max-lg:flex-col gap-4 items-center justify-between text-white/80 font-semibold", "max-sm:text-sm")}>
            <p>© Hectatron all rights reserved</p>
            <div className="flex gap-4 xs:gap-10 items-center justify-center">
                {pages.map((item, index) => (
                    <Link key={index} href={item.link}>{item.text}</Link>
                ))}
            </div>
            <div className="flex gap-4 items-center justify-center">
                {media.map((item, index) => (
                    <Link href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                        <Image src={item.src} alt={item.alt} width={30} height={30} />
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer