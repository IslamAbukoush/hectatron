import { create } from "zustand"

export interface IForm {
    isOpen: boolean,
    setIsOpen : (bool : boolean) => void
    message: string
    setMessage: (message: string) => void
}

export const useFormStore = create<IForm>((set) => ({
    isOpen: false,
    setIsOpen: (bool) => set({ isOpen: bool }),
    message: '',
    setMessage: (message) => set({ message })
}))