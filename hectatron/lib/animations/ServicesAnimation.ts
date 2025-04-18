import { Variants } from "motion/react";

export const ServicesAnimation: Variants = {
    hidden: {
        opacity: 0,
        translateX: -100
    },
    visible: {
        opacity: 1,
        translateX: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.4,
            ease: "easeOut"
        }
    }
}