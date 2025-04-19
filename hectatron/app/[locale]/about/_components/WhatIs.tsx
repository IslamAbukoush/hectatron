import { cn } from "@/lib/utils"
import Image from "next/image"
import Blur from "../../_components/Blur"
import Star from "../../_components/Star"
import * as m from 'motion/react-m'
import { TitleAnimation } from "@/lib/animations/TitleAnimation"
import { FAQLeftAnimation, FAQRightAnimation } from "@/lib/animations/FAQAnimation"
import { useTranslations } from "next-intl"

const WhatIs = () => {
  const t = useTranslations('whatIs');

  return (
    <div className={cn("px-[150px] mt-[60px] flex flex-col relative", "max-lg:px-[50px]")}>
      <m.div 
        variants={TitleAnimation}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 1}}
        className="text-center">
        <h1 className={cn("w-fit text-gradient text-6xl", "max-lg:text-5xl max-sm:text-4xl")}>
          {t("title")}
        </h1>
      </m.div>
      <div className={cn("flex", "max-xl:flex-col max-xl:items-center max-xl:justify-center overflow-hidden")}>
        <m.div 
          variants={FAQLeftAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          className={cn("flex flex-col justify-center gap-2 text-lg text-white/60 max-w-[700px] p-10", "max-xl:px-0 max-lg:text-base max-xl:pb-0 max-xl:pt-10 max-sm:text-sm max-sm:pt-5")}>
          <p className="indent-8">{t("p1")}</p>
          <p className="indent-8">{t("p2")}</p>
        </m.div>
        <m.div 
          variants={FAQRightAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          className="flex items-center justify-center w-[500px] max-sm:w-[300px]">
          <Image className={cn("object-contain w-full max-w-[400px]", "max-lg:max-w-[300px] max-sm:max-w-[200px]")}  src="/images/hecta_logo.png" alt="Hectatron" width={500} height={300}/>
        </m.div>
      </div>
      <div className="absolute inset-0 w-full h-full -z-10">
        <Blur className="top-[400px] left-[-18%] w-[300px] h-[400px]"/>
      </div>
      <Star className="top-[0px] left-[5%]"/>
      <Star className="top-[550px] left-[15%]"/>
      <Star className="top-[50px] right-[10%] w-[60px] h-[60px]"/>
    </div>
  )
}

export default WhatIs