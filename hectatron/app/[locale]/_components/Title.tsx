import { cn } from "@/lib/utils";
import * as m from 'motion/react-m'

type TitleProps = {
    title: string;
    description: string;
    className?: string;
    left?: boolean;
  };

const Title = ({title, description, className, left = false}: TitleProps) => {
  return (
    <m.div 
    initial={{
      opacity: 0,
      y: -100,
      scale: 0.8
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1
    }}
    transition={{
      duration: 0.5,
    }}
    viewport={{ once: true, amount: 1}}
    className={cn(`flex flex-col gap-6 justify-center my-[10px] ${left ? 'items-start' : 'px-1 xxs:px-4 xs:px-10 md:px-14 lg:px-48 xl:px-80 items-center'}`, className)}>
        <h1 className="md:text-6xl xs:text-5xl xxs:text-4xl text-3xl text-center text-gradient">{title}</h1>
        <p className="xl:text-xl lg:text-lg md:text-base xs:text-base text-sm text-white/60 text-center ">{description}</p>
    </m.div>
  )
}

export default Title