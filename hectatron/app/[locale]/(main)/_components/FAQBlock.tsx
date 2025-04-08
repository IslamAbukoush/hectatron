import Image from "next/image"
import * as m from "motion/react-m"


const FAQBlock = () => {
  return (
    <div className="bg-[#1A1A32] rounded-[12px] p-8 inner-shadow border-2 border-[#FF5900]/20 flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center justify-between">
            <h2 className="font-semibold text-xl text-white">What is Next.js, and why do you use it?</h2>
            <Image src='/icons/arrow-right.svg' alt="arrow" width={40} height={40}/>
        </div>
        <m.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, display: "block" }}
        transition={{ duration: 0.5 }}
        className="text-lg text-white/60">Next.js is a React framework that enables server-side rendering, static site generation, and API routes. It is used for its performance optimization, automatic code splitting, and easy setup for production-ready apps.</m.p>
    </div>
  )
}

export default FAQBlock