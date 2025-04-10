import Title from "../_components/Title"
import ProjectsCarousel from "./_components/ProjectsCarousel"

const page = () => {
  return (
    <div>
        <div className="mt-15">
            <Title title="Projects" description="Fast, secure, and scalable Next.js websites with expert support to keep your business ahead." />
        </div>
        <ProjectsCarousel/>
    </div>
  )
}

export default page