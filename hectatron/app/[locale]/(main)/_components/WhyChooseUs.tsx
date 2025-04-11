import { WhyChooseType } from "@/lib/types/WhyChooseType"
import Title from "../../_components/Title"
import Block from "./WhyBlock"
import { cn } from "@/lib/utils"
import Image from "next/image"

const blocks :  WhyChooseType[] = [
  {
    title: "Lightning-Fast Performance",
    description: "Next.js ensures lightning-fast load times with server-side rendering (SSR), static generation (SSG), and optimized caching, delivering a smooth user experience.",
    src: "/icons/performance.png",
    alt: "performance"
  },
  {
    title: "Rock-Solid Security",
    description: "We implement SSL encryption, secure authentication, and DDoS protection, ensuring your website is safe from threats and vulnerabilities.",
    src: "/icons/security.png",
    alt: "seo"
  },
  {
    title: "Scalable & Reliable",
    description: "Designed to handle high traffic effortlessly, our solutions provide stability, efficiency, and seamless growth for your business.",
    src: "/icons/scalable.png",
    alt: "scalability"
  },
  {
    title: "Continuous Support",
    description: "We offer ongoing maintenance, security updates, and performance optimizations, so your website stays secure and up-to-date at all times.",
    src: "/icons/support.png",
    alt: "developer"
  }
]

const WhyChooseUs = () => {
  return (
    <div className={cn("px-[100px] mt-[150px] relative", "max-md:px-[50px] max-sm:px-[30px]")}>
        <Title
        title="Why Choose Us?"
        description="Fast, secure, and scalable Next.js websites with expert support to keep your business ahead."
        />
        <div className={cn("grid grid-cols-2 gap-10 mt-20", "max-lg:grid-cols-1 max-lg:mt-10")}>
            {blocks.map((block, index) => (
                <Block key={index} {...block} />
            ))}
        </div>
        <div className="absolute right-0 top-[-100px] lg:block hidden -z-10">
          <Image className="" src='/images/diamand.png' alt='Diamand' width={300} height={200}/>
        </div>
    </div>
  )
}

export default WhyChooseUs