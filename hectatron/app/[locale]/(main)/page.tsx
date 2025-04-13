
import React from 'react'
import Image from 'next/image'
import Title from '@/app/[locale]/_components/Title';
import InfiniteMarquee from '@/app/[locale]/_components/InfiniteMarquee';
import WhyChooseUs from './_components/WhyChooseUs';
import Services from './_components/Services';
import Customers from './_components/Customers';
import FAQ from './_components/FAQ';
import Star from '../_components/Star';


const Home = () => {
  const techStackItems = [
    { src: '/images/nextjs.png', alt: 'Next.js' },
    { src: '/images/figma.png', alt: 'Figma' },
    { src: '/images/react.png', alt: 'React' },
    { src: '/images/tailwind.png', alt: 'Tailwind' },
  ];

  return (
    <div className="">
      <div className='flex flex-col gap-10 items-center justify-center'>
        <div className="relative overflow-hidden flex flex-col gap-10 items-center pt-20 md:pt-30 h-[calc(100vh-100px)]">
          <Image
            className="absolute h-auto min-w-[350px] md:w-[500px] w-[400px] md:bottom-[-195px] bottom-[-160px] left-0 -z-10"
            src="/images/robot.png"
            alt="robot"
            width={500}
            height={700}
            priority
          />
          <Title title='Elevate Your Brand with Custom Web Solutions' description='We design and develop high-quality, custom websites that enhance your brand and drive results.' />
          <div className="
                z-10 bg-button text-center font-bold text-white border-[1px] border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)]
                lg:text-base lg:px-10 lg:py-6 lg:rounded-[24px]
                xs:text-sm
                text-xs px-8 py-4 rounded-[16px]
              ">
            Get Started
          </div>
        </div>
        <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
          <Image
            className='absolute top-[0] right-0 hidden md:block'
            src='/images/phone.png'
            alt='phone'
            width={500}
            height={400}
          />
        </div>
      </div>
      <div className="w-full bg-[#1A0000]">
        <InfiniteMarquee items={techStackItems} speed={2} />
      </div>
      <WhyChooseUs />
      <Services />
      <Customers />
      <FAQ />
      <div className=" w-full h-full top-0 left-0">
        <Star className='top-[300px] left-[3%]' />
        <Star className='top-[550px] left-[30%]' />
        <Star className='top-[200px] right-[20%]' />
      </div>
    </div>
  )
}

export default Home