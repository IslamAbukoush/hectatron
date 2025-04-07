import Image from 'next/image'
import React from 'react'
import Blur from '../../_components/Blur'
import { WhyChooseType } from '@/lib/types/WhyChooseType'

const ServicesBlock = ({title, description, src, alt} : WhyChooseType) => {
  return (
    <div className='flex items-center gap-20 bg-[#1A1A32] rounded-2xl w-fit px-[50px] py-[50px] border-1 border-white/20 relative jusstify-center'>
        <Image className='z-10' src={src} alt={alt} width={150} height={150}/>
        <div className="overflow-hidden absolute top-0 left-0 w-full h-full z-0">
            <Blur className='w-[100px] h-[110px] blur-2xl top-[70px] left-[70px]' />
        </div>
        <div className="flex flex-col">
            <h1 className='text-3xl font-bold text-gradient'>{title}</h1>
            <p className='text-white/40 text-lg max-w-[700px]'>{description}</p>
        </div>
    </div>
  )
}

export default ServicesBlock