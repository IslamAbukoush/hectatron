import { Variants } from "motion/react";

export const TeamAnimation: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            duration: 0.5,
            ease: 'linear',
            staggerChildren: 0.25
        }
    },
    exit: {
        transition: {
            duration: 0.2,
            ease: 'linear',
            staggerChildren: 0.15
        }
    }
}

export const LeftTeamMemberAnimation = {
    hidden:{
        opacity: 0,
        scale: 0.65,
        x: -200
    },
    visible:{
        opacity: 1,
        scale: 1,
        x: 0,
        transition:{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.4,
            ease: 'easeInOut'
        }
    },
    exit:{
        opacity: 0,
        scale: 0.65,
        y: 200,
        transition:{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.2,
            ease: 'easeInOut'
        }
    }
}

export const RightTeamMemberAnimation = {
    hidden:{
        opacity: 0,
        scale: 0.65,
        x: 200
    },
    visible:{
        opacity: 1,
        scale: 1,
        x: 0,
        transition:{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.4,
            ease: 'easeInOut'
        }
    },
    exit:{
        opacity: 0,
        scale: 0.65,
        y: 200,
        transition:{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.2,
            ease: 'easeInOut'
        }
    }
}