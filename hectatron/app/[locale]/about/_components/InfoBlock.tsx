'use client'

import { Link } from "@/i18n/navigation"
import { useTeamStore } from "@/lib/store/teamStore"
import Image from "next/image"
import * as m from 'motion/react-m'
import Star from "../../_components/Star"
import { buttonAnimation } from "@/lib/animations/buttonAnimation"
import { useTranslations } from "next-intl"

interface InfoType{
    src: string,
    link: string,
    text: string
}

// Social/profile links can remain outside i18n unless you want per-language variants
const infoMax: InfoType[] = [
    {
        src: '/icons/facebook-about.svg',
        link: 'https://www.facebook.com/share/16aX8frmEy/',
        text: 'Maxim Roenco'
    },
    {
        src: '/icons/telegram-about.svg',
        link: '@Max_hdhi',
        text: '@Max_hdhi'
    },
    {
        src: '/icons/instagram-about.svg',
        link: 'https://www.instagram.com/max.roenko',
        text: 'max.roenko'
    },
    {
        src: '/icons/google-about.svg',
        link: 'maxroenco2004@gmail.com',
        text: 'maxroenco2004@gmail.com'
    },
    {
        src: '/icons/github-about.svg',
        link: 'https://github.com/MaxRoenco',
        text: 'MaxRoenco'
    },
    {
        src: '/icons/linkedin-about.svg',
        link: 'linkedin.com/in/roencomax' ,
        text: 'Maxim Roenco'
    },
]

const infoIslam: InfoType[] = [
    {
        src: '/icons/facebook-about.svg',
        link: 'https://www.facebook.com/profile.php?id=100094754474698',
        text: 'Islam Abukoush'
    },
    {
        src: '/icons/telegram-about.svg',
        link: '@geografixx',
        text: '@geografixx'
    },
    {
        src: '/icons/instagram-about.svg',
        link: 'https://www.instagram.com/geo_grafixx/',
        text: 'geo_grafixx'
    },
    {
        src: '/icons/google-about.svg',
        link: 'iabukoush@gmail.com',
        text: 'Islam Abu koush'
    },
    {
        src: '/icons/github-about.svg',
        link: 'https://github.com/IslamAbukoush',
        text: 'IslamAbukoush'
    },
    {
        src: '/icons/linkedin-about.svg',
        link: 'https://www.linkedin.com/in/islam-abu-koush-a191a2299/' ,
        text: 'Islam Abu koush'
    },
]

const InfoBlock = () => {
    const t = useTranslations("infobox"); // Use the "team" scope (or "infoblock" if you want)
    const { currentTeamMember } = useTeamStore();
    const isIslam = currentTeamMember === 'Islam';
    const isMaxim = currentTeamMember === 'Maxim';

    return (
        <div className="w-full flex items-start justify-start px-10 py-8 md:px-16 lg:px-24 xl:px-32 max-md:justify-center max-md:px-4 relative">
            {/* Maxim Info */}
            {isMaxim && (
                <m.div
                    initial={{ opacity: 0, scale: 0.5, x: -200}}
                    whileInView={{ opacity: 1, scale: 1, x: 0}}
                    viewport={{ once: true}}
                    transition={{ type: 'spring', stiffness: 120, damping: 25, duration: 0.5}}
                    className="flex flex-col gap-4 bg-[#1A1A32] inner-shadow rounded-[16px] p-6 max-w-2xl w-full">
                    <div className="w-full text-center">
                        <h2 className="text-gradient text-2xl font-semibold">{t("maximTab")}</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white/60 text-base">
                        <p>{t("roleWebDeveloper")}</p>
                        <p>{t("roleCoFounder")}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {infoMax.map((item, index) => (
                            <div className="flex px-4 py-2 border-2 border-white/20 rounded-[16px]" key={index}>
                                <Link href={item.link} className="w-full h-full flex items-center justify-between">
                                    <Image src={item.src} alt={item.src} width={50} height={50} className="w-10 h-10 min-w-10" />
                                    <p className="text-white font-semibold text-sm ml-2 truncate">{item.text}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </m.div>
            )}

            {/* Islam Info */}
            {isIslam && (
                <m.div
                    initial={{ opacity: 0, scale: 0.5, x: -200}}
                    whileInView={{ opacity: 1, scale: 1, x: 0}}
                    viewport={{ once: true}}
                    transition={{ type: 'spring', stiffness: 120, damping: 25, duration: 0.5}}
                    className="flex flex-col gap-4 bg-[#1A1A32] inner-shadow rounded-[16px] p-6 max-w-2xl w-full">
                    <div className="w-full text-center">
                        <h2 className="text-gradient text-2xl font-semibold">{t("islamTab")}</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white/60 text-base">
                        <p>{t("roleWebDeveloper")}</p>
                        <p>{t("roleCoFounder")}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {infoIslam.map((item, index) => (
                            <m.div 
                                variants={buttonAnimation}
                                initial='hidden'
                                animate='visible'
                                whileHover='hover'
                                className="flex px-4 py-2 border-2 border-white/20 rounded-[16px] cursor-pointer" key={index}
                            >
                                <Link href={item.link} className="w-full h-full flex items-center justify-between">
                                    <Image src={item.src} alt={item.src} width={50} height={50} className="w-10 h-10 min-w-10" />
                                    <p className="text-white font-semibold text-sm ml-2 truncate">{item.text}</p>
                                </Link>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            )}

            {/* Robot Image */}
            <div className="absolute right-0 lg:bottom-[-250px] xl:bottom-[-320px] bottom-[-275px] lg:block hidden -z-10 rtl:-scale-x-100 rtl:left-0 rtl:right-auto">
                <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true}}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
                >
                    <Image 
                        src='/images/robot-about.png' 
                        alt="robot" 
                        width={500} 
                        height={500} 
                        className="xl:w-[600px] lg:w-[450px] object-contain -z-20"
                    />
                </m.div>
            </div>
            <Star className="top-[-50px] right-[5%]"/>
            <Star className="top-[300px] right-[30%] w-[55px] h-[55px]"/>
        </div>
    )
}

export default InfoBlock