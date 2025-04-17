import { Variants } from "motion/react";

export const CustomersAnimation: Variants = {
    hidden: {
        opacity: 0,
    },
    vissible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 0.3,
            ease: "linear",
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.1, // Faster stagger for exit
            duration: 0.4, // Faster duration
            ease: "easeOut",
        }
    }
}

export const CustomerAnimation = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction * 250, // Slightly reduced distance
      scale: 0.9
    }),
    vissible: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction * -250,
      scale: 0.9,
      transition: {
        duration: 0.1, // Faster exit animation (was 0.6)
        ease: "easeOut", // Changed from linear for smoother feel
      }
    })
};