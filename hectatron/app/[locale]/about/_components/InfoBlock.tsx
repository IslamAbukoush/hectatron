'use client'

import { Link } from "@/i18n/navigation"
import { useTeamStore } from "@/lib/store/teamStore"
import Image from "next/image"
import * as m from 'motion/react-m'

interface InfoType{
    src: string,
    link: string,
    text: string
}

const infoMax: InfoType[] = [
    {
        src: '/icons/facebook-color.png',
        link: 'https://www.facebook.com/share/16aX8frmEy/',
        text: 'Maxim Roenco'
    },
    {
        src: '/icons/telegram-color.svg',
        link: '@Max_hdhi',
        text: '@Max_hdhi'
    },
    {
        src: '/icons/instagram-color.svg',
        link: 'https://www.instagram.com/max.roenko',
        text: 'max.roenko'
    },
    {
        src: '/icons/google-color.svg',
        link: 'maxroenco2004@gmail.com',
        text: 'maxroenco2004@gmail.com'
    },
    {
        src: '/icons/github-color.svg',
        link: 'https://github.com/MaxRoenco',
        text: 'MaxRoenco'
    },
    {
        src: '/icons/linkedin-color.svg',
        link: 'linkedin.com/in/roencomax' ,
        text: 'Maxim Roenco'
    },
]

const infoIslam: InfoType[] = [
    {
        src: '/icons/facebook-color.png',
        link: 'https://www.facebook.com/share/16aX8frmEy/',
        text: 'Islam Abu-Koush'
    },
    {
        src: '/icons/telegram-color.svg',
        link: '@Max_hdhi',
        text: 'Islam Abu-Koush'
    },
    {
        src: '/icons/instagram-color.svg',
        link: 'https://www.instagram.com/max.roenko',
        text: 'Islam Abu-Koush'
    },
    {
        src: '/icons/google-color.svg',
        link: 'maxroenco2004@gmail.com',
        text: 'Islam Abu-Koush'
    },
    {
        src: '/icons/github-color.svg',
        link: 'https://github.com/MaxRoenco',
        text: 'Islam Abu-Koush'
    },
    {
        src: '/icons/linkedin-color.svg',
        link: 'linkedin.com/in/roencomax' ,
        text: 'Islam Abu-Koush'
    },
]

const InfoBlock = () => {
    const { currentTeamMember } = useTeamStore();
    const isIslam = currentTeamMember === 'Islam';
    const isMaxim = currentTeamMember === 'Maxim';

  return (
    <div className="w-full flex items-start justify-start px-10 py-8 md:px-16 lg:px-24 xl:px-32 max-md:justify-center max-md:px-4 relative">
         {/* Info Max */}
        {isMaxim && (
        <m.div
        initial={{ opacity: 0, scale: 0.5, x: -200}}
        whileInView={{ opacity: 1, scale: 1, x: 0}}
        viewport={{ once: true}}
        transition={{ type: 'spring', stiffness: 120, damping: 25, duration: 0.5}}
        className="flex flex-col gap-4 bg-[#1A1A32] inner-shadow rounded-[16px] p-6 max-w-2xl w-full">
            <div className="w-full text-center">
                <h2 className="text-gradient text-2xl font-semibold">Maxim Roenco</h2>
            </div>
            <div className="flex flex-col items-center justify-center text-white/60 text-base">
                <p>Web developer</p>
                <p>Co-Founder</p>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
            {infoMax.map((item, index) => (
                    <div className="flex px-4 py-1 border-2 border-white/20 rounded-[16px]" key={index}>
                        <Link href={item.link} className="w-full h-full flex items-center justify-between">
                            <Image src={item.src} alt={item.src} width={50} height={50} className="w-10 h-10 min-w-10" />
                            <p className="text-white font-semibold text-base ml-2 truncate">{item.text}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </m.div>)}

        {/* Info Islam */}
        {isIslam && (
        <m.div
        initial={{ opacity: 0, scale: 0.5, x: -200}}
        whileInView={{ opacity: 1, scale: 1, x: 0}}
        viewport={{ once: true}}
        transition={{ type: 'spring', stiffness: 120, damping: 25, duration: 0.5}}
        className="flex flex-col gap-4 bg-[#1A1A32] inner-shadow rounded-[16px] p-6 max-w-2xl w-full">
            <div className="w-full text-center">
                <h2 className="text-gradient text-2xl font-semibold">Islam Abu-Koush</h2>
            </div>
            <div className="flex flex-col items-center justify-center text-white/60 text-base">
                <p>Web developer</p>
                <p>Co-Founder</p>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
            {infoIslam.map((item, index) => (
                    <div className="flex px-4 py-1 border-2 border-white/20 rounded-[16px]" key={index}>
                        <Link href={item.link} className="w-full h-full flex items-center justify-between">
                            <Image src={item.src} alt={item.src} width={50} height={50} className="w-10 h-10 min-w-10" />
                            <p className="text-white font-semibold text-base ml-2 truncate">{item.text}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </m.div>)}
        
        {/* Robot Image */}
        <div className="absolute right-0 lg:bottom-[-250px] xl:bottom-[-320px] bottom-[-275px] lg:block hidden -z-10">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
          >
            <Image 
              src='/images/robot-about.png' 
              alt="robot" 
              width={500} 
              height={500} 
              className="xl:w-[600px] lg:w-[450px] object-contain"
            />
          </m.div>
        </div>
    </div>
  )
}

export default InfoBlock