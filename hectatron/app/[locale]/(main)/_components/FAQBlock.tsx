'use client'

import Image from "next/image"
import * as m from "motion/react-m"
import { useState } from "react";
import { FAQBlockType } from "@/lib/types/FAQBlockType";
import { cn } from "@/lib/utils";



const FAQBlock = ({title, description}: FAQBlockType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <m.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", type: "tween"}}
      className={cn("bg-[#1A1A32] rounded-[12px] p-8 inner-shadow border-2 border-[#FF5900]/20 flex flex-col gap-4 cursor-pointer", "max-sm:p-5 max-sm:gap-1")}
      onClick={handleToggle}
    >
      <div className={cn("flex flex-row gap-4 items-center justify-between translate-y-2", "max-sm:translate-y-1")}>
        <h2 className={cn("font-semibold text-xl text-white", "max-md:text-lg max-sm:text-sm")}>{title}</h2>
        <m.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image src='/icons/arrow-right.svg' alt="arrow" width={40} height={40} className={cn("max-sm:w-8")}/>
        </m.div>
      </div>
      
      <m.div
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? "16px" : 0
        }}
        initial={{ height: 0, opacity: 0, marginTop: 0 }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden" }}
      >
        <p className={cn("text-lg text-white/60", "max-md:text-base max-sm:text-xs")}>
          {description}
        </p>
      </m.div>
    </m.div>
  )
}

export default FAQBlock