'use client'
import Image from 'next/image'
import { items } from '@/lib/data/projects.data'
import { useRouter } from 'next/navigation'
import { use, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useMainAnimationStore } from '@/lib/store/mainAnimation.store'
import * as m from 'motion/react-m'
import Star from '../../_components/Star'
import Blur from '../../_components/Blur'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const resolvedParams = use(params)
  const project = items.find(item => item.slug === resolvedParams.slug)
  const { resetState } = useMainAnimationStore()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [iframeReady, setIframeReady] = useState(false)

  useEffect(() => {
    // Create a small delay before starting animations to ensure smooth rendering
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const handleBack = () => {
    resetState()
    router.back()
  }

  const handleIframeLoad = () => {
    setIframeReady(true)
  }

  if (!project) {
    return <div className="flex justify-center items-center min-h-screen">Project not found</div>
  }

  return (
    <div className="h-screen w-full relative">
      <div 
        className="w-full h-full"
      >
        <m.iframe 
          src={project.link} 
          initial={{ 
            rotateX: -90,
            scale: 0.3,
            clipPath: 'inset(50% 50% 50% 50%)',
            opacity: 0
          }}
          animate={{
            rotateX: 0, 
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1
          }}
          transition={{ 
            duration: 0.5, 
            type: 'spring', 
            stiffness: 90, 
            damping: 25, 
            ease: 'easeInOut', 
            delay: 0.3 
          }}
          width='100%' 
          height='100%' 
          draggable={false}
          allowFullScreen
          onLoad={handleIframeLoad}
        />
      </div>
      
      <m.div 
        onClick={handleBack}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className={cn(
          "absolute bottom-[50px] left-[5%] flex items-center gap-4 rounded-[24px]",
          "shadow-[inset_1px_1px_20px_6px_rgba(255,255,255,0.4)] px-4 py-2 bg-[#D86A15]",
          "border-1 border-white text-white font-semibold text-2xl cursor-pointer",
          "max-lg:text-xl max-md:text-lg max-sm:text-base"
        )}
      >
        <Image 
          className={cn('max-md:w-[40px] max-sm:w-[30px]')} 
          src='/icons/arrow-left.svg' 
          alt='arrow' 
          width={50} 
          height={50}
        />
        <p>Stop viewing</p>
      </m.div>
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
          <Blur className="right-[-20%] top-[100px] w-[300px] h-[300px]"/>
          <Image className="absolute right-[5%] top-[150px] block max-md:hidden" src='/images/projects-planet.png' alt="planet" width={200} height={200}/>
        </div>
        <Star className="top-[150px] left-[5%]"/>
        <Star className="top-[550px] left-[2%]"/>
        <Star className="top-[150px] right-[20%]"/>
        <Star className="top-[450px] right-[2%]"/>
    </div>
  )
}

export default ProjectPage