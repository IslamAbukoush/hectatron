'use client'
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import useComponentVisible from "@/lib/hooks/useComponentVisible";
import { useLocale } from "next-intl";
import * as m from 'motion/react-m'
import { AnimatePresence } from "motion/react";

export default function LanguageSwitcher() {
    const path = usePathname();
    const locale = useLocale().toUpperCase();
    const {
        ref,
        toggleElement,
        isComponentVisible
    } = useComponentVisible(false);

    return (
        <div className="relative">
            <div className={cn("flex gap-1 cursor-pointer", { 'invisible': isComponentVisible })} ref={toggleElement as React.RefObject<HTMLDivElement>}>
                <Image src='/icons/global.svg' alt="language switcher icon" width={25} height={25} />
                <p className="text-white">{locale}</p>
            </div>
            <AnimatePresence>
                {isComponentVisible && <m.div 
                initial={{rotate: -180, opacity: 0.4, scale: 0}}
                animate={{rotate: 0, opacity: 1, scale: 1}}
                transition={{duration: 0.3, ease: 'easeInOut'}}
                exit={{rotate: -180, opacity: 0, scale: 0}}
                ref={ref as React.RefObject<HTMLDivElement>} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-[#D86A1580] rounded-full flex justify-center items-center z-40">
                    <Image src='/icons/global.svg' alt="language switcher icon" width={25} height={25} className="brightness-[150%]" />
                    <ul className="z-50">
                        <li className={cn("absolute top-1/2 left-1/2 translate-x-[calc(-50%+30px)] -translate-y-1/2 text-white", {'bg-[#FFFFFF66] px-1 rounded-2xl': locale === 'EN'})}><Link locale="en" href={path}>EN</Link></li>
                        <li className={cn("absolute top-1/2 left-1/2 translate-x-[calc(-50%-30px)] -translate-y-1/2 text-white", {'bg-[#FFFFFF66] px-1 rounded-2xl': locale === 'RU'})}><Link locale="ru" href={path}>RU</Link></li>
                        <li className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[calc(-50%+30px)] text-white", {'bg-[#FFFFFF66] px-1 rounded-2xl': locale === 'RO'})}><Link locale="ro" href={path}>RO</Link></li>
                        <li className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[calc(-50%-30px)] text-white", {'bg-[#FFFFFF66] px-1 rounded-2xl': locale === 'AR'})}><Link locale="ar" href={path}>AR</Link></li>
                    </ul>
                </m.div>}
            </AnimatePresence>
        </div>

    )
}