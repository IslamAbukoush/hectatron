
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import Blur from './Blur'
import InfiniteMarquee from './InfiniteMarquee'

const Home = () => {
  const techStackItems = [
    { src: '/images/nextjs.png', alt: 'Next.js' },
    { src: '/images/figma.png', alt: 'Figma' },
    { src: '/images/react.png', alt: 'React' },
    { src: '/images/tailwind.png', alt: 'Tailwind' },
  ];

  return (
    <div className="">
      <div className='px-[100px] py-[50px]'>
          <div className="flex flex-col gap-10 items-center justify-center">
              <Title title='Elevate Your Brand with Custom Web Solutions' description='We design and develop high-quality, custom websites that enhance your brand and drive results.'/>
              <div className="w-[200px] bg-button text-center font-bold text-[18px] text-white px-10 py-6 rounded-[24px] border-[1px] border-white/60 shadow-[inset_10px_10px_20px_rgba(255,255,255,0.25),inset_-10px_-10px_20px_rgba(255,255,255,0.25)]">
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
          <InfiniteMarquee items={techStackItems} speed={5} />
      </div>
    </div>
  )
}

export default Home