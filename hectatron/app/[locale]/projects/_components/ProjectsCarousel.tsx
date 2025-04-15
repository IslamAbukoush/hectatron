import { ItemsType } from "@/lib/types/ItemsType"
import CarouselItem from "./CarouselItem"
import Blur from "../../_components/Blur"
import { cn } from "@/lib/utils"
import { items } from '@/lib/data/projects.data'

// const items : ItemsType[] = [
//   {
//     id: 0,
//     slug: 'investora',
//     title: "Investora",
//     description: "Crypto project",
//     src: "/screens/investora-1.png",
//     alt: "investora",
//   },
//   {
//     id: 1,
//     slug: 'movie',
//     title: "Movies & TV shows website",
//     description: "Movies & TV shows website",
//     src: "/screens/netflix-1.jpg",
//     alt: "netflix",
//   },
//   {
//     id: 2,
//     slug: 'movie',
//     title: "Movies & TV shows website",
//     description: "Movie project",
//     src: "/screens/netflix-2.jpg",
//     alt: "netflix",
//   },
//   {
//     id: 3,
//     slug: 'investora',
//     title: "Investora",
//     description: "Crypto project",
//     src: "/screens/investora-1.png",
//     alt: "investora",
//   },
//   {
//     id: 4,
//     slug: 'investora',
//     title: "Investora",
//     description: "Crypto project",
//     src: "/screens/investora-1.png",
//     alt: "investora",
//   },
//   {
//     id: 5,
//     slug: 'movie',
//     title: "Movies & TV shows website",
//     description: "Movies & TV shows website",
//     src: "/screens/netflix-1.jpg",
//     alt: "netflix",
//   },
//   {
//     id: 6,
//     slug: 'movie',
//     title: "Movies & TV shows website",
//     description: "Movies & TV shows website",
//     src: "/screens/netflix-2.jpg",
//     alt: "netflix",
//   },
//   {
//     id: 7,
//     slug: 'investora',
//     title: "Investora",
//     description: "Crypto project",
//     src: "/screens/investora-1.png",
//     alt: "investora",
//   },
//   {
//     id: 8,
//     slug: 'investora',
//     title: "Investora",
//     description: "Crypto project",
//     src: "/screens/investora-1.png",
//     alt: "investora",
//   },
//   {
//     id: 9,
//     slug: 'movie',
//     title: "Movies & TV shows website",
//     description: "Movies & TV shows website",
//     src: "/screens/netflix-1.jpg",
//     alt: "netflix",
//   },
//   {
//     id: 10,
//     slug: 'movie',
//     title: "Movies & TV shows website",
//     description: "Movies & TV shows website",
//     src: "/screens/netflix-2.jpg",
//     alt: "netflix",
//   },
//   {
//     id: 11,
//     slug: 'investora',
//     title: "Investora",
//     description: "Crypto project",
//     src: "/screens/investora-1.png",
//     alt: "investora",
//   }
// ]

const ProjectsCarousel = () => {
  return (
    <div className={cn("relative overflow-hidden w-full h-[800px]", "max-md:h-[700px] max-sm:h-[550px]")}>
      <div className="absolute w-full h-full">
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} index={index} arrayLength={items.length} />
        ))}
      </div>
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
          <Blur className="bottom-[-400px] left-[41%] w-[300px]"/>
      </div>
    </div>
  )
}

export default ProjectsCarousel