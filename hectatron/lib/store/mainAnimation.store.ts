import { create } from "zustand"

export interface IMainAnimationStates {
    isNewPageAnimation: boolean,
    isHideHeading: boolean,
}

export interface IMainAnimation extends IMainAnimationStates {
    changeState: (value: boolean, state: keyof IMainAnimationStates) => void,
    resetState: () => void,
    resetHeading: () => void
}

export const useMainAnimationStore = create<IMainAnimation>((set) => ({
    isNewPageAnimation: false,
    isHideHeading: false,
    changeState: (value, state) => set({ [state]: value }),
    resetState: () => set({ isNewPageAnimation: false, isHideHeading: false }),
    resetHeading: () => set({ isHideHeading: false })
}))