import { Variants } from "motion/react";

export const FAQAnimation: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.35,
            duration: 0.6
        }
    }
}

export const FAQLeftAnimation: Variants = {
    hidden: {
        opacity: 0,
        x: -200
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 200,
            damping: 30
        }
    }
}

export const FAQRightAnimation: Variants = {
    hidden: {
        opacity: 0,
        x: 200
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 200,
            damping: 30
        }
    }
}