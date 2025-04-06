import { Link } from "@/i18n/navigation"
import Image from "next/image"

const Header = () => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ]
  return (
    <div className="flex justify-between items-center py-8 px-4 z-10">
        <Image src='/images/logo.png' alt="Hectatron" width={300} height={100}/>
        <div className="flex gap-[100px] items-center bg-white/11 px-[150px] py-6 rounded-[24px] translate-x-[-70px]">
            <ul className="flex gap-[60px] ">
                {links.map(link => (
                    <li  key={link.label} className="text-white/45 text-[18px]">
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <Image src='/icons/global.svg' alt="global" width={30} height={30}/>
        </div>
        <div className="bg-button text-center font-bold text-[18px] text-white px-10 py-6 rounded-[24px] border-[1px] border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)]">
            Get Started
        </div>
    </div>
  )
}

export default Header