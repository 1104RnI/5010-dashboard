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

export interface PeriodState {
	serviceStartDate: Date
	startDate: Date
	endDate: Date
	setPeriod: (startDate: Date, endDate: Date) => void
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
	startDate: new Date(),
	endDate: new Date(),
	setPeriod: (startDate: Date, endDate: Date) =>
		set(() => ({ startDate: startDate, endDate: endDate })),
}))
