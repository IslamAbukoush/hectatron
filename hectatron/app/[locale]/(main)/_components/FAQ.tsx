import { FAQBlockType } from "@/lib/types/FAQBlockType"
import Title from "../../_components/Title"
import FAQBlock from "./FAQBlock"
import { cn } from "@/lib/utils"
import Star from "../../_components/Star"
import * as m from 'motion/react-m'
import { FAQAnimation } from "@/lib/animations/FAQAnimation"

const faqs : FAQBlockType[] = [
  {
    title: "What is Next.js, and why do you use it?",
    description: "Next.js is a React framework that enables server-side rendering, static site generation, and API routes. It is used for its performance optimization, automatic code splitting, and easy setup for production-ready apps."
  },
  {
    title: "How does your team handle project management?",
    description: "We use Agile methodologies to manage projects, ensuring flexibility and adaptability to changes. Regular sprints, stand-ups, and retrospectives help us stay aligned with client goals."
  },
  {
    title: "What technologies do you specialize in?",
    description: "We specialize in a wide range of technologies including React, Node.js, Python, and various cloud platforms. Our team is always learning to keep up with the latest trends."
  },
  {
    title: "How do you ensure code quality?",
    description: "We follow best practices in coding standards, conduct regular code reviews, and use automated testing tools to ensure high code quality and maintainability."
  },
  {
    title: "What is your approach to UI/UX design?",
    description: "Our approach is user-centered, focusing on usability and accessibility. We conduct user research and testing to create intuitive and engaging designs."
  },
  {
    title: "How do you handle client communication?",
    description: "We prioritize clear and transparent communication with clients through regular updates, feedback sessions, and dedicated project managers."
  },
  {
    title: "What is your process for deploying applications?",
    description: "We follow a CI/CD pipeline for deploying applications, ensuring smooth transitions from development to production with minimal downtime."
  },
  {
    title: "How do you handle security in your applications?",
    description: "We implement security best practices including data encryption, secure authentication, and regular security audits to protect user data."
  }
]

const FAQ = () => {
  return (
    <div className={cn("px-[100px] py-[50px] flex flex-col gap-10 items-center justify-center relative ", "max-md:px-[60px] max-sm:px-[30px] max-sm:py-[30px]")}>
        <Title 
            title='FAQs' 
            description='Find answers to common questions about our services, technology, and process. If you need more details, feel free to reach out!'
        />
        <div
        className={cn("grid grid-cols-2 gap-10 w-full overflow-hidden", "max-lg:grid-cols-1")}>
            <m.div
            variants={FAQAnimation}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-10">
            {faqs.slice(0, 4).map((item, index) => (
              <FAQBlock 
                key={index} 
                title={item.title} 
                description={item.description} 
                direction='left'
                index={index}
              />
            ))}
            </m.div>
            <m.div 
            variants={FAQAnimation}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-col gap-10">
              {faqs.slice(4, 8).map((item, index) => (
                <FAQBlock 
                  key={index} 
                  title={item.title} 
                  description={item.description} 
                  direction='right'
                  index={index}
                />
              ))}
            </m.div>
        </div>
        <Star className="left-[10%] top-[100px] w-[40px]"/>
        <Star className="right-[3%] top-[850px] w-[40px]"/>
    </div>
  )
}

export default FAQ