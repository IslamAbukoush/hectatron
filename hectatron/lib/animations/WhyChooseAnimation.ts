import { Variants } from "motion/react";

export const WhyChoosesAnimation: Variants = {
    hidden: {
        opacity: 0,
    },
    vissible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            duration: 0.8,
            ease: "linear",
            delayChildren: 0.6
        }
    }
}

export const WhyChooseAnimation: Variants = {
    hidden: { 
        opacity: 0, 
        x: 200
    },
    vissible: {
        opacity: 1,
        x: 0
    }
}