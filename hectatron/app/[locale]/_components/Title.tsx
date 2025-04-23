'use client'
import { useMainAnimationStore } from "@/lib/store/mainAnimation.store";
import { cn } from "@/lib/utils";
import * as m from 'motion/react-m'

type TitleProps = {
    title: string;
    description: string;
    className?: string;
    left?: boolean;
  };

const Title = ({title, description, className, left = false}: TitleProps) => {
  const {isHideHeading} = useMainAnimationStore();
  return (
    <m.div 
    initial={isHideHeading ? 
    {opacity: 1, scale: 1, translateY: 0} :
    { opacity: 0,
      y: -100,
      scale: 0.8
    }}
    whileInView={
    isHideHeading ? 
    {opacity: 0, scale: 0.4, translateY: -90} : {
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    viewport={{ once: true }}
    className={cn(`flex flex-col gap-6 justify-center my-[10px] text-center items-center ${left ? 'items-start' : 'px-1 xxs:px-4 xs:px-10 md:px-14 lg:px-48 xl:px-80'}`, className)}>
        <h1 className="md:text-6xl xs:text-5xl xxs:text-4xl text-3xl text-center text-gradient w-fit">{title}</h1>
        <p className="xl:text-xl lg:text-lg md:text-base xs:text-base text-sm text-white/60 text-center ">{description}</p>
    </m.div>
  )
}

export default Title