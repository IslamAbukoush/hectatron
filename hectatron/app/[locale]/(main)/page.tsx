
import React from 'react'
import Image from 'next/image'
import Title from '@/app/[locale]/_components/Title';
import Blur from '@/app/[locale]/_components/Blur';
import InfiniteMarquee from '@/app/[locale]/_components/InfiniteMarquee';
import WhyChooseUs from './_components/WhyChooseUs';
import Services from './_components/Services';
import Customers from './_components/Customers';
import FAQ from './_components/FAQ';
import Footer from '../_components/Footer';
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
        <div className="flex flex-col gap-10 items-center pt-20 md:pt-30 h-[calc(100vh-100px)]">
          <Title title='Elevate Your Brand with Custom Web Solutions' description='We design and develop high-quality, custom websites that enhance your brand and drive results.' />
          <div className="
                bg-button text-center font-bold text-white border-[1px] border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)]
                lg:text-base lg:px-10 lg:py-6 lg:rounded-[24px]
                xs:text-sm
                text-xs px-8 py-4 rounded-[16px]
              ">
            Get Started
          </div>
        </div>
        <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
          <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
            <Image
              className="absolute
              xl:w-[900px] xl:h-[850px] xl:top-[20%] xl:left-[-150px]
              sm:w-[700px] sm:h-[700px] sm:top-[31%] sm:left-[-100px]
              xs:w-[700px] xs:h-[700px] xs:top-[31%] xs:left-[-100px]
              min-w-[500px] min-h-[500px] w-[500px] h-[500px] top-[51%] left-[-70px]
              object-contain"
              src="/images/robot.png"
              alt="robot"
              width={500}
              height={400}
              priority
            />
          </div>

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