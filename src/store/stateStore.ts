import { create } from 'zustand'

import { ResolutionType } from '../hooks/useResponsive'

export interface ResState {
	resolution: ResolutionType
	setResolution: (newRes: ResolutionType) => void
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
