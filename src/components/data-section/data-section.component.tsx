import { FormEvent } from 'react'
import {
	ResState,
	IndicatorType,
	DataState,
	useResStore,
	useIndicatorStore,
	useDataStore,
} from '../../store/store'

import TabBar from '../tab-bar/tab-bar.component'
import DataSummary from '../data-summary/data-summary.component'
import PnlAnalysis from '../pnl-analysis/pnl-analysis.component'
import WinRatioAnalysis from '../win-ratio-analysis/win-ratio-analysis.component'
import TradingCountsAnalysis from '../trading-counts-analysis/trading-counts-analysis.component'
import { DataSectionContainer, DataContentsArea } from './data-section.styles'

export default function DataSection() {
	const resState: ResState = useResStore()
	const changeState = useIndicatorStore(
		(state) => (e: FormEvent<HTMLInputElement>) => {
			state.setIndicatorType(
				e.currentTarget.value.toLowerCase() as IndicatorType,
			)
		},
	)
	const data: DataState = useDataStore()

	return (
		<DataSectionContainer>
			<DataContentsArea resolution={resState.resolution}>
				<TabBar items={['High', 'Mid', 'Low']} handleClick={changeState} />
				<DataSummary
					startTime={data.periods[0]}
					endTime={data.periods[data.periods.length - 1]}
					results={[data.halfTimeData, data.fullTimeData]}
				/>
				{/* <div id="charts-container"> */}
				<PnlAnalysis />
				<WinRatioAnalysis />
				<TradingCountsAnalysis />
				{/* </div> */}
			</DataContentsArea>
		</DataSectionContainer>
	)
}
