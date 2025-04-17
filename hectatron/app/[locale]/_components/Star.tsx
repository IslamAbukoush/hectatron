import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import * as m from 'motion/react-m'

const Star = ({className}: {className?: string}) => {
  return (
    <div
    className=" absolute top-0 left-0 w-full h-full -z-10">
      <m.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{             
            duration: 0.5,
            type: 'spring',
            stiffness: 200,
            damping: 30
          }}
          viewport={{ once: true}}
      className="">
        <Image className={twMerge("absolute -z-10 md:block hidden animate-pulse", className)} src='/icons/star.svg' alt='star' width={40} height={40}/>
        </m.div>
    </div>
  )
}

export default Star
