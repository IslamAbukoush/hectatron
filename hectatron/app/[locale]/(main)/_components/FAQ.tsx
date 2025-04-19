import { FAQBlockType } from "@/lib/types/FAQBlockType"
import Title from "../../_components/Title"
import FAQBlock from "./FAQBlock"
import { cn } from "@/lib/utils"
import Star from "../../_components/Star"
import * as m from 'motion/react-m'
import { FAQAnimation } from "@/lib/animations/FAQAnimation"
import { useTranslations } from "next-intl"

const FAQ = () => {
  // Get t from translation scope 'home.faq'
  const t = useTranslations('home.faq');

  // Prepare array from translations instead of hardcoded text
  const faqs: FAQBlockType[] = Array.from({ length: 8 }).map((_, i) => ({
    title: t(`questions.${i}.title`),
    description: t(`questions.${i}.description`),
  }));

  return (
    <div className={cn("px-[100px] py-[50px] flex flex-col gap-10 items-center justify-center relative ", "max-md:px-[60px] max-sm:px-[30px] max-sm:py-[30px]")}>
      <Title 
        title={t('title')}
        description={t('description')}
      />
      <div className={cn("grid grid-cols-2 gap-10 w-full overflow-hidden", "max-lg:grid-cols-1")}>
        <m.div
          variants={FAQAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-10">
          {faqs.slice(0, 4).map((item, index) => (
            <FAQBlock
              key={index}
              title={item.title}
              description={item.description}
              direction='left'
              index={index}
            />
          ))}
        </m.div>
        <m.div
          variants={FAQAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col gap-10">
          {faqs.slice(4, 8).map((item, index) => (
            <FAQBlock
              key={index + 4}
              title={item.title}
              description={item.description}
              direction='right'
              index={index + 4}
            />
          ))}
        </m.div>
      </div>
      <Star className="left-[10%] top-[100px] w-[40px]" />
      <Star className="right-[3%] top-[850px] w-[40px]" />
    </div>
  )
}

export default FAQ