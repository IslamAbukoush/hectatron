import { Variants } from "motion/react"

export const textAnimation: Variants = {
    hidden:{opacity: 0, scale: 0},
    visible:{opacity: 1, scale: 1},
    hover:{color: '#FF7043', scale: 1.1, transition:{
        type: 'spring', stiffness: 200, damping: 15, duration: 0.3
    }
}
}

export const buttonAnimation: Variants = {
    hidden:{opacity: 0, scale: 0},
    visible:{opacity: 1, scale: 1},
    hover:{ scale: 1.1, transition:{
        type: 'spring', stiffness: 200, damping: 15, duration: 0.5
    }
}
}