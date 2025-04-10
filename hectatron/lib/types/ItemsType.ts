export interface ItemsType{
    id: number,
    title: string,
    description: string,
    src: string,
    alt: string,
  }
export interface CarouselType {
  item: ItemsType,
  index: number,
  arrayLength: number
}