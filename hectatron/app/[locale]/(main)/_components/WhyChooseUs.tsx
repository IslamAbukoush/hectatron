import { WhyChooseType } from "@/lib/types/WhyChooseType"
import Title from "../../_components/Title"
import Block from "./WhyBlock"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Star from "../../_components/Star"
import Blur from "../../_components/Blur"
import * as m from 'motion/react-m'
import { WhyChoosesAnimation } from "@/lib/animations/WhyChooseAnimation"
import { useTranslations } from "next-intl"

const WhyChooseUs = () => {
  const t = useTranslations('home.whychoose');

  const blocks: WhyChooseType[] = Array.from({ length: 4 }).map((_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    src: t(`items.${i}.src`),
    alt: t(`items.${i}.alt`),
  }));

  return (
    <div className={cn("px-[100px] mt-[150px] relative w-full", "max-md:px-[50px] max-sm:px-[30px]")}>
      <Title
        title={t("title")}
        description={t("description")}
      />
      <m.div
        variants={WhyChoosesAnimation}
        initial="hidden"
        whileInView="vissible"
        viewport={{ once: true }}
        className={cn("grid grid-cols-2 gap-10 mt-20 overflow-hidden", "max-lg:grid-cols-1 max-lg:mt-10")}>
        {blocks.map((block, index) => (
          <Block key={index} {...block} />
        ))}
      </m.div>
      <div className="absolute right-0 top-[-100px] lg:block hidden -z-10">
        <Image className="" src='/images/diamand.png' alt='Diamand' width={300} height={200} />
      </div>
      <Star className="right-[1%] top-[-130px]" />
      <Star className="left-[10%] top-[0px]" />
      <Star className="left-[2%] top-[500px]" />
      <Star className="right-[10%] top-[800px]" />
      <div className=" absolute top-0 left-0 w-full h-full -z-10">
        <Blur className="top-[250px] left-[-10%] w-[200px] h-[300px]" />
      </div>
    </div>
  )
}

export default WhyChooseUs