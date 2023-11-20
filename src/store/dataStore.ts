import { create } from 'zustand'

import { IndicatorType } from './stateStore'

export type DataParamsType = {
	indicator: IndicatorType
	period: 'yearly' | 'monthly' | 'daily' // ← this will go to stateStore later
	year: number
	month?: number
	day?: number
}

export type DataType = {
	date: string
	profit: number
	deducted_profit: number
	win_rate: number
	total_trades: number
	win_trades: number
	lose_trades: number
}

export interface DataState {
	data: DataType[]
	setData: (data: DataType[]) => void
}

export const getAverage = (data: number[]) => {
	const average = data.reduce((acc, item) => acc + item) / data.length
	return average
}

export const getSum = (data: number[]) => {
	const sum = data.reduce((acc, item) => acc + item)
	return sum
}

export const useDataStore = create<DataState>((set) => ({
	data: [
		{
			date: '',
			profit: 0,
			deducted_profit: 0,
			win_rate: 0,
			total_trades: 0,
			win_trades: 0,
			lose_trades: 0,
		},
	],
	setData: (newData: DataType[]) => set({ data: newData }),
}))
