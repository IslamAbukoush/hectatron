import { WhyChooseType } from "@/lib/types/WhyChooseType"
import { cn } from "@/lib/utils"
import Image from "next/image"
import * as m from 'motion/react-m'
import { WhyChooseAnimation } from "@/lib/animations/WhyChooseAnimation"


const Block = ({title, description, alt, src} : WhyChooseType) => {
  return (
    <m.div
    variants={WhyChooseAnimation}
    className={cn("flex flex-col gap-4 bg-[#1A1A32] p-8 rounded-2xl inner-shadow border-2 border-[#D86A15]/20", "max-sm:p-6")}>
      <div className="flex gap-4 items-center justify-start text-center">
        <Image className="max-md:w-[70px] max-sm:w-[50px]" src={src} alt={alt} width={90} height={50}/>
        <h1 className={cn("text-gradient text-3xl font-bold text-center", "max-md:text-2xl max-sm:text-lg")}>{title}</h1>
      </div>
      <p className={cn("text-white/60 text-lg", "max-md:text-base max-sm:text-sm")}>{description}</p>
    </m.div>
  )
}

export default Block