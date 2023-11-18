import { create } from 'zustand'

import { ResolutionType } from '../hooks/useResponsive'

export interface ResState {
	resolution: ResolutionType
	setResolution: (newRes: ResolutionType) => void
}

export type DataType = {
	pnlData: number[]
	winRatioData: number[]
	countData: {
		total: number[]
		win: number[]
		loss: number[]
	}
	deductedPnlData: number[]
}

export interface DataState {
	periods: string[]
	halfTimeData: DataType
	fullTimeData: DataType
}

export type IndicatorType = 'high' | 'mid' | 'low'

interface IndicatorState {
	indicatorType: IndicatorType
	setIndicatorType: (type: IndicatorType) => void
}

export const useIndicatorStore = create<IndicatorState>((set) => ({
	indicatorType: 'high',
	setIndicatorType: (type: IndicatorType) =>
		set(() => ({ indicatorType: type })),
}))

export const useResStore = create<ResState>((set) => ({
	resolution: { isDesktop: true, isTablet: false, isMobile: false },
	setResolution: (newRes: ResolutionType) =>
		set(() => ({ resolution: newRes })),
}))

export const getAverage = (data: number[]) => {
	const average = data.reduce((acc, item) => acc + item) / data.length
	return average
}

// ↓ Data from the server
export const useDataStore = create<DataState>((set) => ({
	periods: ['11.09', '11.10', '11.11', '11.12', '11.13', '11.14', '11.15'],
	halfTimeData: {
		pnlData: [2, 3, 4, 5, 4, 7, 8],
		winRatioData: [50, 60, 55, 30, 75, 66, 80],
		countData: {
			total: [10, 11, 8, 4, 9, 10, 12],
			win: [5, 7, 5, 2, 6, 6, 9],
			loss: [5, 4, 3, 1, 3, 4, 3],
		},
		deductedPnlData: [2, 3, 4, 5, 4, 7, 8],
	},
	fullTimeData: {
		pnlData: [2, 3, 4, 5, 4, 7, 8],
		winRatioData: [50, 60, 55, 30, 75, 66, 80],
		countData: {
			total: [10, 11, 8, 4, 9, 10, 12],
			win: [5, 7, 5, 2, 6, 6, 9],
			loss: [5, 4, 3, 1, 3, 4, 3],
		},
		deductedPnlData: [2, 3, 4, 5, 4, 7, 8],
	},
}))
