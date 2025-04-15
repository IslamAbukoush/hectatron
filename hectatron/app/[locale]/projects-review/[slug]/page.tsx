'use client'
import Image from 'next/image'
import { items } from '@/lib/data/projects.data'
import { useRouter } from 'next/navigation'
import { use } from 'react'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const resolvedParams = use(params)
  const project = items.find(item => item.slug === resolvedParams.slug)
  
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  if (!project) {
    return <div className="flex justify-center items-center min-h-screen">Project not found</div>
  }

  return (
    <div className="h-screen w-full relative">
      <iframe src={project.link} width='100%' height='100%' draggable={false} allowFullScreen/>
      <div 
      onClick={handleBack}
      className="absolute bottom-[100px] left-[5%] flex items-center gap-4 rounded-[24px] shadow-[inset_1px_1px_20px_6px_rgba(255,255,255,0.4)] px-4 py-2 bg-[#D86A15] border-1 border-white text-white font-semibold text-2xl cursor-pointer">
      <Image src='/icons/arrow-left.svg' alt='arrow' width={50} height={50}/>
        <p>Stop viewing</p>
      </div>
    </div>
  )
}

export default ProjectPage