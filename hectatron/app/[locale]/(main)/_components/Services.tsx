import { WhyChooseType } from "@/lib/types/WhyChooseType"
import Title from "../../_components/Title"
import ServicesBlock from "./ServicesBlock"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Star from "../../_components/Star"

const services : WhyChooseType[] = [
    {
        title: "Web Development",
        description: "Build modern, responsive, and dynamic websites using Next.js, Tailwind CSS, and the latest web technologies.",
        src: "/icons/cubic.png",
        alt: "Web Dev"
    },
    {
        title: "UI/UX Design",
        description: "Create visually stunning and user-friendly interfaces that enhance user experience and engagement.",
        src: "/icons/batery.png",
        alt: "UI/UX"
    },
    {
        title: "SEO Optimization",
        description: "Implement effective SEO strategies to improve your website's visibility and ranking on search engines.",
        src: "/icons/seo.png",
        alt: "SEO"
    },
    {
        title: "E-commerce Solutions",
        description: "Develop robust e-commerce platforms with secure payment gateways and seamless shopping experiences.",
        src: "/icons/monitor.png",
        alt: "E-commerce"
    }
]

const Services = () => {
  return (
    <div className={cn("px-[100px] mt-[150px] relative", "max-sm:px-[50px] max-md:mt-[80px]")}>
        <Title title='Services' description="Fast, secure, and scalable Next.js websites with expert support to keep your business ahead." />
        <div 
        className={cn("grid grid-cols-1 gap-10 mt-20", "max-md:mt-10")}>
            {services.map((service, index) => (
                <ServicesBlock key={index} {...service} />
            ))}
        </div>
        <div className="absolute right-0 top-[-300px] lg:block hidden -z-10">
            <Image className="" src='/images/robot-hand.png' alt='Diamand' width={500} height={200}/>
        </div>
        <div className="absolute right-0 top-[800px] lg:block hidden -z-10">
            <Image className="" src='/images/planet-diamand.png' alt='Diamand' width={500} height={200}/>
        </div>
        <Star className="left-[1%] top-[300px] w-[40px]"/>
        <Star className="right-[3%] top-[550px] w-[50px]"/>
        <Star className="left-[2%] top-[1300px] w-[40px]"/>
    </div>
  )
}

export default Services