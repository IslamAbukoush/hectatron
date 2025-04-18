import Image from "next/image"
import Blur from "../_components/Blur"
import Title from "../_components/Title"
import ProjectsCarousel from "./_components/ProjectsCarousel"
import Star from "../_components/Star"
import { getTranslations } from "next-intl/server"

const page = async () => {
  const t = await getTranslations("projects");
  return (
    <div>
        <div className="mt-15 relative w-full h-full">
          <div className="flex items-center justify-center text-center">
            <Title title={t("title")} description={t("description")} />
          </div>
        </div>
        <ProjectsCarousel/>
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

export default page