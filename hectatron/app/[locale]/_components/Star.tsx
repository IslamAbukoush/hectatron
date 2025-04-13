import Image from 'next/image'
import { twMerge } from 'tailwind-merge'


const Star = ({className}: {className?: string}) => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full -z-10">
        <Image className={twMerge("absolute -z-10 md:block hidden", className)} src='/icons/star.svg' alt='star' width={40} height={40}/>
    </div>
  )
}

export default Star
