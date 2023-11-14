import { create } from 'zustand'

import { ResolutionType } from '../hooks/useResponsive'

export interface NavBarState {
	isOpened: boolean
	setIsOpened: () => void
	resetIsOpened: () => void
}

export interface ResState {
	resolution: ResolutionType
	setResolution: (newRes: ResolutionType) => void
}

// export const useNavBarStore = create<NavBarState>((set) => ({
// 	isOpened: false,
// 	setIsOpened: () => set((state) => ({ isOpened: !state.isOpened })),
// 	resetIsOpened: () => set(() => ({ isOpened: false })),
// }))

export const useResStore = create<ResState>((set) => ({
	resolution: { isDesktop: true, isTablet: false, isMobile: false },
	setResolution: (newRes: ResolutionType) =>
		set(() => ({ resolution: newRes })),
}))
