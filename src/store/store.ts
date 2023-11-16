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

interface DataState {
	periods: string[]
	pnlData: number[]
	winRatioData: number[]
	countData: {
		total: number[]
		win: number[]
		loss: number[]
	}
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
	periods: ['11.09', '11.10', '11.11', '11.12', '11.13', '11.14', '11.15'],
	pnlData: [2, 3, 4, 5, 4, 7, 8],
	winRatioData: [50, 60, 55, 30, 75, 66, 80],
	countData: {
		total: [10, 11, 8, 4, 9, 10, 12],
		win: [5, 7, 5, 2, 6, 6, 9],
		loss: [5, 4, 3, 1, 3, 4, 3],
	},
}))
