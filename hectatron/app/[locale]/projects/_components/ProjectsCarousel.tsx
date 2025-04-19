"use client";
import { ItemsType } from "@/lib/types/ItemsType"
import CarouselItem from "./CarouselItem"
import Blur from "../../_components/Blur"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl";

const items: Omit<ItemsType, 'title' | 'description'>[] = [
  {
    id: 0,
    slug: 'investora',
    src: "/screens/investora-1.png",
    alt: "investora",
    link: "https://salmon-dune-0bbe1d503.5.azurestaticapps.net/"
  },
  {
    id: 1,
    slug: 'movie',
    src: "/screens/netflix-1.jpg",
    alt: "netflix",
    link: ""
  },
  {
    id: 2,
    slug: 'movie',
    src: "/screens/netflix-2.jpg",
    alt: "netflix",
    link: ""
  },
  {
    id: 3,
    slug: 'portfolio3d-1',
    src: "/screens/portfolio3d-1.jpg",
    alt: "portfolio3d-1",
    link: "https://maxroenco.website"
  },
  {
    id: 4,
    slug: 'portfolio3d-1',
    src: "/screens/portfolio3d-2.jpg",
    alt: "portfolio3d-2",
    link: "https://maxroenco.website"
  },
  {
    id: 5,
    slug: 'portfolio3d-1',
    src: "/screens/portfolio3d-3.jpg",
    alt: "portfolio3d-3",
    link: "https://maxroenco.website"
  },
  {
    id: 6,
    slug: 'portfolio3d-2',
    src: "/screens/portfolio3d-4.jpg",
    alt: "portfolio3d-4",
    link: "https://maxroenco.com"
  },
  {
    id: 7,
    slug: 'portfolio3d-2',
    src: "/screens/portfolio3d-5.jpg",
    alt: "portfolio3d-5",
    link: "https://maxroenco.com"
  },
  {
    id: 8,
    slug: 'portfolio3d-2',
    src: "/screens/portfolio3d-6.jpg",
    alt: "portfolio3d-6",
    link: "https://maxroenco.com"
  },
  {
    id: 9,
    slug: 'quant-apps',
    src: "/screens/quant-apps1.jpg",
    alt: "quant-apps",
    link: "https://www.quant-apps.com/en"
  },
  {
    id: 10,
    slug: 'quant-apps',
    src: "/screens/quant-apps4.jpg",
    alt: "quant-apps",
    link: "https://www.quant-apps.com/en"
  },
  {
    id: 11,
    slug: 'ramadan',
    src: "/screens/ramadan-1.jpg",
    alt: "ramadan",
    link: "https://ramadan.abukoush.website/en"
  }
];

const ProjectsCarousel = () => {
  const t = useTranslations("projects.items");
  return (
    <div className={cn("relative overflow-hidden w-full h-[800px]", "max-md:h-[700px] max-sm:h-[550px]")}>
      <div className="absolute w-full h-full">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            item={{
              ...item,
              title: t(`${index}.title`),
              description: t(`${index}.description`)
            }}
            index={index}
            arrayLength={items.length}
          />
        ))}
      </div>
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
          <Blur className="bottom-[-400px] left-[41%] w-[300px]"/>
      </div>
    </div>
  )
}

export default ProjectsCarousel