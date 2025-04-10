import { ItemsType } from "@/lib/types/ItemsType"
import CarouselItem from "./CarouselItem"

const items : ItemsType[] = [
  {
    id: 0,
    title: "Investora",
    description: "Crypto project",
    src: "/screens/investora-1.png",
    alt: "investora",
  },
  {
    id: 1,
    title: "Netflix",
    description: "Movie project",
    src: "/screens/netflix-1.jpg",
    alt: "netflix",
  },
  {
    id: 2,
    title: "Netflix",
    description: "Movie project",
    src: "/screens/netflix-2.jpg",
    alt: "netflix",
  },
  {
    id: 3,
    title: "Investora",
    description: "Crypto project",
    src: "/screens/investora-1.png",
    alt: "investora",
  },
  {
    id: 4,
    title: "Investora",
    description: "Crypto project",
    src: "/screens/investora-1.png",
    alt: "investora",
  },
  {
    id: 5,
    title: "Netflix",
    description: "Movie project",
    src: "/screens/netflix-1.jpg",
    alt: "netflix",
  },
  {
    id: 6,
    title: "Netflix",
    description: "Movie project",
    src: "/screens/netflix-2.jpg",
    alt: "netflix",
  },
  {
    id: 7,
    title: "Investora",
    description: "Crypto project",
    src: "/screens/investora-1.png",
    alt: "investora",
  },
  {
    id: 8,
    title: "Investora",
    description: "Crypto project",
    src: "/screens/investora-1.png",
    alt: "investora",
  },
  {
    id: 9,
    title: "Netflix",
    description: "Movie project",
    src: "/screens/netflix-1.jpg",
    alt: "netflix",
  },
  {
    id: 10,
    title: "Netflix",
    description: "Movie project",
    src: "/screens/netflix-2.jpg",
    alt: "netflix",
  },
  {
    id: 11,
    title: "Investora",
    description: "Crypto project",
    src: "/screens/investora-1.png",
    alt: "investora",
  }
]

const ProjectsCarousel = () => {
  return (
    <div className="relative overflow-hidden w-full h-[800px]">
      <div className="absolute w-full h-full">
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} index={index} arrayLength={items.length} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsCarousel