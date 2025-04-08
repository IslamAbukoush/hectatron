import { Variants } from "motion/react";

export const CustomersAnimation: Variants = {
    hidden: {
        opacity: 0,
    },
    vissible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            duration: 0.4,
            ease: "linear",
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.25,
            duration: 0.4,
            ease: "linear",
        }
    }
}

export const CustomerAnimation = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction * 300,
      scale: 0.8
    }),
    vissible: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction * -300,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "linear",
    }
    })
  };