import { create } from "zustand"

export interface ICarousel {
    activeCardId: number,
    setActiveCardId : (id : number) => void
}

export const useCarouselStore = create<ICarousel>((set) => ({
    activeCardId: 1,
    setActiveCardId: (id) => set({ activeCardId: id })
}))