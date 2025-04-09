
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


const Home = () => {
  const techStackItems = [
    { src: '/images/nextjs.png', alt: 'Next.js' },
    { src: '/images/figma.png', alt: 'Figma' },
    { src: '/images/react.png', alt: 'React' },
    { src: '/images/tailwind.png', alt: 'Tailwind' },
  ];

  return (
    <div className="">
      <div className='py-[50px] flex flex-col gap-10 items-center justify-center'>
          <div className="flex flex-col gap-10 items-center justify-center">
              <Title title='Elevate Your Brand with Custom Web Solutions' description='We design and develop high-quality, custom websites that enhance your brand and drive results.'/>
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
              <Image className='absolute top-[110px]' src='/images/robot.png' alt='robot' width={600} height={500}/>
              <Image className='absolute top-[-100px] right-0' src='/images/phone.png' alt='robot' width={600} height={500}/>
              <Blur className='top-[-350px] left-[45%] w-[250px] h-[500px] blur-[200px] rounded-full'/>
          </div>
      </div>
      <div className="w-full bg-[#1A0000] mt-28">
          <InfiniteMarquee items={techStackItems} speed={2} />
      </div>
      <WhyChooseUs/>
      <Services/>
      <Customers/>
      <FAQ/>
      <Footer />
    </div>
  )
}

export default Home