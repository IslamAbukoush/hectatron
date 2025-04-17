'use client'

import { fadeInUp, staggerContainer } from "@/lib/animations/constactAnimations"
import Title from "../_components/Title"
import FormCard from "./_components/FormCard"
import FormElement from "./_components/FormElement"
import * as m from "motion/react-m"

export default function ContactPage() {
    return (
        <m.div 
            className="my-14"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <m.div variants={fadeInUp}>
                <Title title="Contact us" description="Fast, secure, and scalable Next.js websites with expert support to keep your business ahead." />
            </m.div>
            
            <m.div 
                className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] mt-20 mx-5 md:mx-10 lg:mx-20 xl:grid-cols-[1fr_2fr]"
                variants={staggerContainer}
            >
                <FormCard />
                <FormElement />
            </m.div>
        </m.div>
    )
}