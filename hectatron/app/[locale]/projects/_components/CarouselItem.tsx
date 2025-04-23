'use client'

import { CarouselType } from '@/lib/types/ItemsType'
import Image from 'next/image'
import * as m from 'motion/react-m'
import { cn } from '@/lib/utils'
import { useCarouselStore } from '@/lib/store/CarouselStore'
import CarouselDetailes from './CarouselDetailes'
import { AnimatePresence } from 'motion/react'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMainAnimationStore } from '@/lib/store/mainAnimation.store'

const CarouselItem = ({item, index, arrayLength}: CarouselType) => {
    const {activeCardId, setActiveCardId} = useCarouselStore();
    const [windowWidth, setWindowWidth] = useState(0);
    const router = useRouter();
    const {isNewPageAnimation, changeState, resetState} = useMainAnimationStore();

    useEffect(() => {
        console.log('useEffect triggered');
        console.log(`isNewPageAnimation: ${isNewPageAnimation}`);
        resetState();
        console.log('State reset to default values');
        console.log(`isNewPageAnimation: ${isNewPageAnimation}`);
    }, [resetState]);

    useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
    }, []);


    const getResponsiveRadius = () => {
        if (windowWidth <= 640) return 400; 
        if (windowWidth <= 768) return 500;
        if (windowWidth <= 1024) return 650;
        return 800;
    };

    const getYgap = () => {
        if (windowWidth <= 640) return 500;
        if (windowWidth <= 768) return 650;
        if (windowWidth <= 1024) return 800;
        return 1000;
    };

    const getScale = () => {
        if (windowWidth <= 1024) return 1.2;
        return 1.3;
    };


    const updateActiveCardId = (id: number) => {
        if(activeCardId === id){
            changeState(true, 'isNewPageAnimation');
            setTimeout(() => {
                router.push(`/projects-review/${item.slug}`)
            }, 400)
        }else{
            setActiveCardId(id)
        }
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
    const radius = getResponsiveRadius();
    const rotate = angleDiff * rotateStep;
    const x = Math.cos((angleDiff - 3) * angleStep) * radius + windowWidth;
    const y = Math.sin((angleDiff - 3) * angleStep) * radius + getYgap() ;

    const isActive = activeCardId === item.id;
    const isAnimate = isNewPageAnimation && isActive;

  return (
    <m.div
    style={isAnimate ? {
        transformStyle: 'preserve-3d',
        transformOrigin: 'center bottom', 
        perspective: '1200px'
      } : {}}
    initial={{
        scale: 1,
        zIndex: isActive ? 20 : 6 - Math.abs(angleDiff),
        y: y,
        x: x,
        rotate: rotate,
        opacity: 0,
        translateX: 0, 
        translateY: 200
    }}
    animate={
        isAnimate ? {
            scale: getScale(),
            translateY: -130,
            transform: 'perspective(1200px) rotateX(-70deg) rotateY(0deg) translateZ(30px)', 
        } :{
        scale: isActive ? getScale() : 1,
        zIndex: isActive ? 20 : 6 - Math.abs(angleDiff),
        rotate: rotate,
        y: y,
        x: x - windowWidth,
        opacity: 1, 
        translateY: 0
    }}
    transition={isAnimate ? {
        duration: 0.5,
        ease: 'easeInOut'
    } : {
        type: 'keyframes', 
        stiffness: 230, 
        damping: 32
    }}
    onClick={() => updateActiveCardId(item.id)}
    className={cn(" transition duration-300 absolute left-[30%] flex flex-col", isActive ? "" : "grayscale-100 contrast-50", "max-sm:translate-x-[-50px] max-md:translate-x-[-60px] max-lg:translate-x-[-60px] max-xl:translate-x-[-50px]")}
    >
        <Image 
        width={600} 
        height={500} 
        src={item.src} 
        alt={item.alt}
        draggable="false"
        priority={index > 6 ? false : true}
        className={cn('rounded-[8px]', 'max-lg:w-[500px] max-md:w-[400px] max-sm:w-[300px]')}
        />
        <AnimatePresence>
            {isActive && <CarouselDetailes title={item.title} description={item.description}/>}
        </AnimatePresence>
    </m.div>
  )
}

export default CarouselItem