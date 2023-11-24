import { create } from 'zustand'

import { ResolutionType } from '../hooks/useResponsive'

export interface ResState {
	resolution: ResolutionType
	setResolution: (newRes: ResolutionType) => void
}

export type IndicatorType = 'high' | 'mid' | 'low'

export interface IndicatorState {
	indicatorType: IndicatorType
	setIndicatorType: (type: IndicatorType) => void
}

type DataStringType = {
	year: number
	month: number
	day: number
}

export interface PeriodState {
	serviceStartDate: Date
	startDate: DataStringType
	endDate: DataStringType
	setPeriod: (startDate: Date, endDate: Date) => void
}

const getDateString = (date: Date): DataStringType => {
	const year = date.getFullYear()
	// const month = ('0' + (date.getMonth() + 1)).slice(-2)
	// const day = ('0' + date.getDate()).slice(-2)
	const month = date.getMonth() + 1
	const day = date.getDate()

	return { year, month, day }
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

export const usePeriodStore = create<PeriodState>((set) => ({
	serviceStartDate: new Date(2023, 10, 8),
	startDate: getDateString(
		new Date(new Date().getFullYear(), new Date().getMonth(), 1),
	),
	endDate: getDateString(new Date()),
	setPeriod: (startDate: Date, endDate: Date) =>
		set(() => ({
			startDate: getDateString(startDate),
			endDate: getDateString(endDate),
		})),
}))
