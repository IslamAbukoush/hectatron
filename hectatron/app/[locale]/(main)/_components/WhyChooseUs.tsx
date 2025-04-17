import { WhyChooseType } from "@/lib/types/WhyChooseType"
import Title from "../../_components/Title"
import Block from "./WhyBlock"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Star from "../../_components/Star"
import Blur from "../../_components/Blur"
import * as m from 'motion/react-m'
import { WhyChoosesAnimation } from "@/lib/animations/WhyChooseAnimation"

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
        <m.div
        variants={WhyChoosesAnimation}
        initial='hidden'
        whileInView='vissible'
        viewport={{once: true}}
        className={cn("grid grid-cols-2 gap-10 mt-20 overflow-hidden", "max-lg:grid-cols-1 max-lg:mt-10")}>
            {blocks.map((block, index) => (
                <Block key={index} {...block} />
            ))}
        </m.div>
        <div className="absolute right-0 top-[-100px] lg:block hidden -z-10">
          <Image className="" src='/images/diamand.png' alt='Diamand' width={300} height={200}/>
        </div>
        <Star className="right-[1%] top-[-130px]"/>
        <Star className="left-[10%] top-[0px]"/>
        <Star className="left-[2%] top-[500px]"/>
        <Star className="right-[10%] top-[800px]"/>
        <div className=" absolute top-0 left-0 w-full h-full -z-10">
          <Blur className="top-[250px] left-[-10%] w-[200px] h-[300px]"/>
        </div>
    </div>
  )
}

export default WhyChooseUs