'use client'

import { useMainAnimationStore } from '@/lib/store/mainAnimation.store';
import { cn } from '@/lib/utils'
import * as m from 'motion/react-m'

interface TypeDetailes {
  title: string,
  description: string
}

const CarouselDetailes = ({ title, description }: TypeDetailes) => {
const {isHideHeading} = useMainAnimationStore();

const animateDiv = {
  initial: isHideHeading ? {opacity: 1, scale: 1} : { opacity: 0, scale: 0 },
  animate: isHideHeading ? {opacity: 0, scale: 0} : { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: isHideHeading ? { duration: 0.5, ease: 'easeInOut' } : {duration: 0.5},
}
  return (
    <div className="absolute w-full h-full pointer-events-none">
      <m.div
        {...animateDiv}
        className={cn("absolute w-full text-center top-[-25%] px-4 md:px-6 lg:px-8", "max-sm:top-[-40%]")}>
        <h2 className='text-gradient text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>{title}</h2>
      </m.div>
      <m.div
        {...animateDiv}
        className={cn("absolute bottom-[-25%] w-full text-center px-4 md:px-6 lg:px-8", "max-sm:bottom-[-55%]")}>
        <p className='text-white/60 text-sm sm:text-base'>{description}</p>
      </m.div>
    </div>
  )
}

export default CarouselDetailes