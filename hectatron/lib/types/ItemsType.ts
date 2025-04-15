export interface ItemsType{
    id: number,
    slug: string
    title: string,
    description: string,
    src: string,
    alt: string,
    link: string
  }
export interface CarouselType {
  item: ItemsType,
  index: number,
  arrayLength: number
}