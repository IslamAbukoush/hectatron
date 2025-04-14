import Image from 'next/image'
import { items } from '@/lib/data/projects.data'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = items.find(item => item.slug === params.slug)
  
  if (!project) {
    return <div className="flex justify-center items-center min-h-screen">Project not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <Image 
            src={project.src}
            alt={project.alt}
            width={800}
            height={600}
            className="w-full object-cover rounded-lg"
            priority
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-200">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage