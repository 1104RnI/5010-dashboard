import { useEffect, FormEvent } from 'react'

import axios from 'axios'
import {
	ResState,
	IndicatorType,
	useResStore,
	useIndicatorStore,
} from '../../store/stateStore'
import { DataState, useDataStore, DataParamsType } from '../../store/dataStore'

import TabBar from '../tab-bar/tab-bar.component'
import DataSummary from '../data-summary/data-summary.component'
import PnlAnalysis from '../pnl-analysis/pnl-analysis.component'
import WinRatioAnalysis from '../win-ratio-analysis/win-ratio-analysis.component'
import TradingCountsAnalysis from '../trading-counts-analysis/trading-counts-analysis.component'
import { DataSectionContainer, DataContentsArea } from './data-section.styles'

export default function DataSection() {
	const resState: ResState = useResStore()
	const indicatorState = useIndicatorStore((state) => state.indicatorType)
	const changeState = useIndicatorStore(
		(state) => (e: FormEvent<HTMLInputElement>) => {
			state.setIndicatorType(
				e.currentTarget.value.toLowerCase() as IndicatorType,
			)
		},
	)

	const { data, setData }: DataState = useDataStore((state) => ({
		data: state.data,
		setData: state.setData,
	}))

	async function getData(params: DataParamsType) {
		const indicatorType =
			params.indicator === 'low'
				? 0
				: params.indicator === 'mid'
				? 1
				: params.indicator === 'high'
				? 2
				: -1

		try {
			const response = await axios.get(
				'http://13.214.72.76:5000/get_statistics',
				{
					params: {
						period: params.period,
						year: params.year,
						...(params.month && { month: params.month }),
						...(params.day && { day: params.day }),
					},
				},
			)
			setData(response.data[indicatorType][params.indicator.substring(0, 1)])
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		getData({
			indicator: indicatorState,
			period: 'monthly',
			year: 2023,
			month: 11,
			// day: 12,
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [indicatorState])

	return (
		<DataSectionContainer>
			<DataContentsArea resolution={resState.resolution}>
				<TabBar items={['High', 'Mid', 'Low']} handleClick={changeState} />
				<DataSummary
					startTime={data[0].date}
					endTime={data[data.length - 1].date}
					results={[data, data]}
				/>
				<PnlAnalysis />
				<WinRatioAnalysis />
				<TradingCountsAnalysis />
			</DataContentsArea>
		</DataSectionContainer>
	)
}
