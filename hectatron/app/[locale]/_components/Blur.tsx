import { twMerge } from 'tailwind-merge'


const Blur = ({className}: {className?: string}) => {
  return (
    <div className={twMerge(`absolute w-[250px] h-[500px] blur-[200px] rounded-full bg-[#FF8629] -z-30 animate-pulse  ${className}`)}/>
  )
}

export default Blur
