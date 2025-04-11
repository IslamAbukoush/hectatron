import Image from 'next/image'
import React from 'react'
import Blur from '../../_components/Blur'
import { WhyChooseType } from '@/lib/types/WhyChooseType'

const ServicesBlock = ({title, description, src, alt} : WhyChooseType) => {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12 bg-[#1A1A32]  md:max-w-[80%] rounded-xl sm:rounded-2xl p-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-12 border border-white/20 relative'>
        <div className="relative flex-shrink-0">
          <Image 
            className='object-cover w-20 sm:w-24 md:w-28 lg:w-32 h-auto z-10 mx-auto' 
            src={src} 
            alt={alt} 
            width={150} 
            height={150}
          />
          <div className="overflow-hidden absolute top-0 left-0 w-full h-full z-0 blur-[50px]">
              <Blur className='w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
        </div>
        
        <div className="flex flex-col mt-4 sm:mt-0 w-full">
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gradient text-center sm:text-left'>{title}</h1>
            <p className='text-white/40 text-sm sm:text-base lg:text-lg w-full text-center sm:text-left mt-2'>{description}</p>
        </div>
    </div>
  )
}

export default ServicesBlock