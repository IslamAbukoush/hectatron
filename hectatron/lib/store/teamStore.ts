import { create } from "zustand"

export type TeamMember = 'Islam' | 'Maxim';

export interface ITeamStore{
    currentTeamMember: TeamMember,
    setCurrentTeamMember: (member: TeamMember) => void
}

export const useTeamStore = create<ITeamStore>((set) => ({
    currentTeamMember: 'Islam',
    setCurrentTeamMember: (member) => set({ currentTeamMember: member})
}))