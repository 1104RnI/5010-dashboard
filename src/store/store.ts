import { create } from 'zustand'

import { ResolutionType } from '../hooks/useResponsive'

// export interface NavBarState {
// 	isOpened: boolean
// 	setIsOpened: () => void
// 	resetIsOpened: () => void
// }

export interface ResState {
	resolution: ResolutionType
	setResolution: (newRes: ResolutionType) => void
}

export interface dataType {
	data: number[]
	labels: string[]
}

interface DataState {
	pnlData: dataType
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

// ↓ Data from the server
export const useDataStore = create<DataState>((set) => ({
	pnlData: {
		data: [2, 3, 4, 5, 4, 7, 8],
		labels: ['11.09', '11.10', '11.11', '11.12', '11.13', '11.14', '11.15'],
	} as dataType,
}))
