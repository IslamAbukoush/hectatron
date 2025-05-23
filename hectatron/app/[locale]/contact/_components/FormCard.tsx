'use client'

import Image from "next/image"
import * as m from "motion/react-m"
import { cardAnimation, listItemAnimation, socialIconAnimation, staggerContainer } from "@/lib/animations/constactAnimations"
import { useTranslations } from "next-intl"

export default function FormCard() {
    const t = useTranslations('contactCard');
    return (
        <m.div 
            className="bg-[#1A1A32] relative rounded-xl overflow-hidden p-5 xs:p-10 flex flex-col gap-10 md:gap-32"
            variants={cardAnimation}
        >
            <Image src='/icons/Circles.svg' alt="circles" width={200} height={200} className="absolute bottom-0 right-0 z-0 w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] rtl:-scale-x-100 rtl:left-0 rtl:right-auto" />
            
            <m.div 
                className="flex flex-col gap-3 items-center md:items-start"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <m.p 
                    className="text-[#FF8629] font-semibold text-2xl xs:text-3xl"
                    variants={listItemAnimation}
                >
                    {t('title')}
                </m.p>
                <m.p 
                    className="text-[#C9C9C9] text-sm xs:text-base md:text-xl"
                    variants={listItemAnimation}
                >
                    {t('description')}
                </m.p>
            </m.div>

            <m.ul 
                className="flex flex-col gap-12 [&>li]:flex [&>li]:flex-col md:[&>li]:flex-row [&>li]:items-center [&>li]:gap-1 md:[&>li]:gap-5 [&>li]:text-white z-0"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <m.li variants={listItemAnimation}>
                    <Image src="/icons/phone.svg" alt="phone" width={24} height={24} className="w-10 h-10 md:w-[24px] md:h-[24px]" />
                    {t('phone')}
                </m.li>
                <m.li variants={listItemAnimation}>
                    <Image src="/icons/mail.svg" alt="email" width={24} height={24} className="w-10 h-10 md:w-[24px] md:h-[24px]" />
                    {t('email')}
                </m.li>
                <m.li variants={listItemAnimation}>
                    <Image src="/icons/location.svg" alt="location" width={24} height={24} className="w-12 h-12 md:w-[24px] md:h-[24px]" />
                    {t('location')}
                </m.li>
            </m.ul>
            
            <m.div 
                className="flex gap-5 w-full md:justify-start justify-center z-0"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <m.div variants={socialIconAnimation} whileHover="hover" className="cursor-pointer">
                    <Image src='/icons/twitter.svg' alt="twitter" width={40} height={30} />
                </m.div>
                <m.div variants={socialIconAnimation} whileHover="hover" className="cursor-pointer">
                    <Image src='/icons/insta.svg' alt="instagram" width={40} height={30} />
                </m.div>
                <m.div variants={socialIconAnimation} whileHover="hover" className="cursor-pointer">
                    <Image src='/icons/discord.svg' alt="discord" width={40} height={30} />
                </m.div>
            </m.div>
        </m.div>
    )
}