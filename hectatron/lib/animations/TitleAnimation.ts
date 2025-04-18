import { Variants } from "motion/react";

export const TitleAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      }
    }
  } 