'use client'

import { CarouselType } from '@/lib/types/ItemsType'
import Image from 'next/image'
import * as m from 'motion/react-m'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useCarouselStore } from '@/lib/store/CarouselStore'

const CarouselItem = ({item, index, arrayLength}: CarouselType) => {
    const {activeCardId, setActiveCardId} = useCarouselStore();


    const updateActiveCardId = (id: number) => {
        setActiveCardId(id)
    }
    const rotateStep = 360 / arrayLength;
    const angleStep = (Math.PI * 2) / arrayLength;
    const getShortestRotationDistance = (current: number, target: number, total: number) => {
        const directDistance = (target - current) % total;
        const altDistance = directDistance > 0 ? directDistance - total : directDistance + total;
        return Math.abs(directDistance) < Math.abs(altDistance) ? directDistance : altDistance;
    }
    const normalizedActiveIndex = ((activeCardId % arrayLength) + arrayLength) % arrayLength;
    const normalizedItemIndex = ((index % arrayLength) + arrayLength ) % arrayLength;

    const angleDiff = getShortestRotationDistance(normalizedActiveIndex, normalizedItemIndex, arrayLength);
    const radius = 800;
    const rotate = angleDiff * rotateStep;
    const x = Math.cos((angleDiff - 3) * angleStep) * radius ;
    const y = Math.sin((angleDiff - 3) * angleStep) * radius + 900;

    const isActive = activeCardId === item.id;

  return (
    <m.div
    initial={{
        scale: 1,
        zIndex: isActive ? 20 : 6 - Math.abs(angleDiff),
        y: y,
        x: x,
        rotate: rotate,
        rotateX: 0,
        opacity: 0, 
        translateY: 190
    }}
    animate={{
        scale: isActive ? 1.2 : 1,
        zIndex: isActive ? 20 : 6 - Math.abs(angleDiff),
        rotate: rotate,
        y: y,
        x: x,
        opacity: 1, 
        translateY: 0
    }}
    transition={{
        type: 'keyframes', 
        stiffness: 230, 
        damping: 32,
        duration: 0.4,
        ease:"easeInOut"
    }}
    onClick={() => updateActiveCardId(item.id)}
    className={cn("rounded-[8px] transition duration-300 absolute left-[30%] flex flex-col", isActive ? "" : "grayscale-100 contrast-50")}
    >
        {/* <div className="w-full text-center">
            <h2 className='text-gradient text-4xl font-semibold'>{item.title}</h2>
        </div> */}
            <Image 
            width={600} 
            height={500} 
            src={item.src} 
            alt={item.alt}
            draggable="false"
            priority={index > 6 ? false : true}
            />
        {/* <p className='text-white/60 text-base'>{item.description}</p> */}
    </m.div>
  )
}

export default CarouselItem