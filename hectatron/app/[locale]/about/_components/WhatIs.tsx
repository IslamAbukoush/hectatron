import { cn } from "@/lib/utils"
import Image from "next/image"

const WhatIs = () => {
  return (
    <div className={cn("px-[150px] mt-[60px] flex flex-col", "max-lg:px-[50px]")}>
      <div className="text-center">
        <h1 className={cn("w-fit text-gradient text-6xl", "max-lg:text-5xl max-sm:text-4xl")}>What is Hectatron?</h1>
      </div>
      <div className={cn("flex", "max-xl:flex-col max-xl:items-center max-xl:justify-center")}>
          <div className={cn("flex flex-col justify-center gap-2 text-lg text-white/60 max-w-[700px] p-10", "max-xl:px-0 max-lg:text-base max-xl:pb-0 max-xl:pt-10 max-sm:text-sm max-sm:pt-5")}>
              <p className="indent-8">Hectatron is a dynamic IT company specializing in modern website development, optimization, and SEO. Founded by Maxim and Islam Abu-Koush, both experienced full-stack developers, Hectatron brings together cutting-edge technologies like Next.js, Tailwind CSS, and other modern libraries to deliver high-quality, efficient, and responsive web solutions.</p>
              <p className="indent-8">With a passion for innovation and a commitment to excellence, our team focuses on creating websites that are not only visually appealing but also optimized for performance and search engine visibility. Whether it&apos;s building from scratch or enhancing existing platforms, Hectatron is dedicated to delivering tailored solutions that meet our clients&apos; needs.</p>
          </div>
          <div className="flex items-center justify-center w-[500px] max-sm:w-[300px]">
              <Image className={cn("object-contain w-full max-w-[400px]", "max-lg:max-w-[300px] max-sm:max-w-[200px]")}  src="/images/hecta_logo.png" alt="Hectatron" width={500} height={300}/>
          </div>
      </div>
    </div>
  )
}

export default WhatIs