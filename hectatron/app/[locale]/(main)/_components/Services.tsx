import { WhyChooseType } from "@/lib/types/WhyChooseType"
import Title from "../../_components/Title"
import ServicesBlock from "./ServicesBlock"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Star from "../../_components/Star"
import { useTranslations } from "next-intl"

const Services = () => {
  const t = useTranslations('home.services');
  const services: WhyChooseType[] = Array.from({ length: 4 }).map((_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    src: t(`items.${i}.src`),
    alt: t(`items.${i}.alt`),
  }));

  return (
    <div className={cn("px-[100px] mt-[150px] relative", "max-sm:px-[50px] max-md:mt-[80px]")}>
      <Title 
        title={t('title')} 
        description={t('description')} 
      />
      <div className={cn("grid grid-cols-1 gap-10 mt-20", "max-md:mt-10")}>
        {services.map((service, index) => (
          <ServicesBlock key={index} {...service} />
        ))}
      </div>
      <div className="absolute right-0 top-[-300px] lg:block hidden -z-10">
          <Image className="" src='/images/robot-hand.png' alt='Diamand' width={500} height={200}/>
      </div>
      <div className="absolute right-0 top-[800px] lg:block hidden -z-10">
          <Image className="" src='/images/planet-diamand.png' alt='Diamand' width={500} height={200}/>
      </div>
      <Star className="left-[1%] top-[300px] w-[40px]"/>
      <Star className="right-[3%] top-[550px] w-[50px]"/>
      <Star className="left-[2%] top-[1300px] w-[40px]"/>
    </div>
  )
}

export default Services