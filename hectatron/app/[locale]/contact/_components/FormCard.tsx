'use client'

import Image from "next/image"
import * as m from "motion/react-m"
import { cardAnimation, listItemAnimation, socialIconAnimation, staggerContainer } from "@/lib/animations/constactAnimations"

export default function FormCard() {
    return (
        <m.div 
            className="bg-[#1A1A32] relative rounded-xl overflow-hidden p-5 xs:p-10 flex flex-col gap-10 md:gap-32"
            variants={cardAnimation}
        >
            <Image src='/icons/circles.svg' alt="circles" width={200} height={200} className="absolute bottom-0 right-0 z-0 w-[150px] h-[150px] xs:w-[200px] xs:h-[200px]" />
            
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
                    Contact Information
                </m.p>
                <m.p 
                    className="text-[#C9C9C9] text-sm xs:text-base md:text-xl"
                    variants={listItemAnimation}
                >
                    Say something to start a live chat!
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
                    +373 697-048-56
                </m.li>
                <m.li variants={listItemAnimation}>
                    <Image src="/icons/mail.svg" alt="email" width={24} height={24} className="w-10 h-10 md:w-[24px] md:h-[24px]" />
                    hectatron.web@gmail.com
                </m.li>
                <m.li variants={listItemAnimation}>
                    <Image src="/icons/location.svg" alt="location" width={24} height={24} className="w-12 h-12 md:w-[24px] md:h-[24px]" />
                    Chisinau Islam's Home
                </m.li>
            </m.ul>
            
            <m.div 
                className="flex gap-5 w-full md:justify-start justify-center z-0"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <m.div variants={socialIconAnimation} whileHover="hover">
                    <Image src='/icons/twitter.svg' alt="twitter" width={30} height={30} />
                </m.div>
                <m.div variants={socialIconAnimation} whileHover="hover">
                    <Image src='/icons/insta.svg' alt="instagram" width={30} height={30} />
                </m.div>
                <m.div variants={socialIconAnimation} whileHover="hover">
                    <Image src='/icons/discord.svg' alt="discord" width={30} height={30} />
                </m.div>
            </m.div>
        </m.div>
    )
}