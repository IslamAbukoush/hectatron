import { WhyChooseType } from "@/lib/types/WhyChooseType"
import Image from "next/image"



const Block = ({title, description, alt, src} : WhyChooseType) => {
  return (
    <div className="flex flex-col gap-2 bg-[#1A1A32] p-8 rounded-2xl inner-shadow border-2 border-[#D86A15]/20">
      <Image className="" src={src} alt={alt} width={90} height={50}/>
      <h1 className="text-gradient text-3xl font-bold">{title}</h1>
      <p className="text-white/60 text-lg">{description}</p>
    </div>
  )
}

export default Block