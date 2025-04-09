import Image from 'next/image'
import React from 'react'
import Blur from '../../_components/Blur'
import { WhyChooseType } from '@/lib/types/WhyChooseType'

const ServicesBlock = ({title, description, src, alt} : WhyChooseType) => {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-10 lg:gap-20 bg-[#1A1A32] w-full rounded-2xl px-6 sm:px-8 lg:px-[50px] py-8 sm:py-10 lg:py-[50px] border-1 border-white/20 relative'>
        <div className="relative z-10">
          <Image 
            className='object-cover w-[100px] sm:w-[120px] lg:w-[150px] h-auto' 
            src={src} 
            alt={alt} 
            width={150} 
            height={150}
          />
          <div className="overflow-hidden absolute top-0 left-0 w-full h-full z-0 blur-[30px]">
              <Blur className='w-[80px] sm:w-[90px] lg:w-[100px] h-[90px] sm:h-[100px] lg:h-[110px] blur-2xl top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2' />
          </div>
        </div>
        
        <div className="flex flex-col mt-6 sm:mt-0">
            <h1 className='text-2xl sm:text-2xl lg:text-3xl font-bold text-gradient text-center sm:text-left'>{title}</h1>
            <p className='text-white/40 text-base sm:text-base lg:text-lg max-w-full sm:max-w-[500px] lg:max-w-[700px] text-center sm:text-left mt-2'>{description}</p>
        </div>
    </div>
  )
}

export default ServicesBlock