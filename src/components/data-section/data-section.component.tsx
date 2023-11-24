import { useEffect } from 'react'

import axios from 'axios'
import {
	ResState,
	PeriodState,
	useResStore,
	useIndicatorStore,
	usePeriodStore,
} from '../../store/stateStore'
import {
	DataState,
	useDataStore,
	DataParamsType,
	setDataRange,
} from '../../store/dataStore'

import DataSummary from '../data-summary/data-summary.component'
import PnlAnalysis from '../pnl-analysis/pnl-analysis.component'
import WinRatioAnalysis from '../win-ratio-analysis/win-ratio-analysis.component'
import TradingCountsAnalysis from '../trading-counts-analysis/trading-counts-analysis.component'
import { DataSectionContainer, DataContentsArea } from './data-section.styles'

export default function DataSection() {
	const resState: ResState = useResStore()
	const indicatorState = useIndicatorStore((state) => state.indicatorType)
	const period: PeriodState = usePeriodStore()

	const { daytimeData, fulltimeData, setData }: DataState = useDataStore(
		(state) => ({
			daytimeData: state.daytimeData,
			fulltimeData: state.fulltimeData,
			setData: state.setData,
		}),
	)

	async function getData(params: DataParamsType) {
		const indicatorType =
			params.indicator === 'low'
				? 0
				: params.indicator === 'mid'
				? 1
				: params.indicator === 'high'
				? 2
				: -1

		const axiosParams = {
			period: params.period,
			year: params.year,
			...(params.month && { month: params.month }),
			...(params.day && { day: params.day }),
		}

		try {
			const response = await axios.all([
				axios.get(process.env.REACT_APP_DATA_URL, {
					params: { ...axiosParams, specific_hour: true },
					headers: { 'X-Requested-With': 'XMLHttpRequest' },
				}),
				axios.get(process.env.REACT_APP_DATA_URL, {
					params: { ...axiosParams },
					headers: { 'X-Requested-With': 'XMLHttpRequest' },
				}),
			])
			setData(
				setDataRange(
					response[0].data[indicatorType][params.indicator.substring(0, 1)],
					period.startDate.day,
					period.endDate.day,
				),
				setDataRange(
					response[1].data[indicatorType][params.indicator.substring(0, 1)],
					period.startDate.day,
					period.endDate.day,
				),
			)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		getData({
			indicator: indicatorState,
			period: 'monthly',
			year: period.startDate.year,
			month: period.startDate.month,
			// day: 12,
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [indicatorState, period])

	return (
		<DataSectionContainer>
			<DataContentsArea resolution={resState.resolution}>
				<DataSummary
					startTime={fulltimeData[0].date}
					endTime={fulltimeData[fulltimeData.length - 1].date}
					results={[daytimeData, fulltimeData]}
				/>
				<PnlAnalysis />
				<WinRatioAnalysis />
				<TradingCountsAnalysis />
			</DataContentsArea>
		</DataSectionContainer>
	)
}
