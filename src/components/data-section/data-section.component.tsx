import { ResState, useResStore } from '../../store/store'

import TabBar from '../tab-bar/tab-bar.component'
import DataSummary from '../data-summary/data-summary.component'
import PnlAnalysis from '../pnl-analysis/pnl-analysis.component'
import WinRatioAnalysis from '../win-ratio-analysis/win-ratio-analysis.component'
import TradingCountsAnalysis from '../trading-counts-analysis/trading-counts-analysis.component'
import { DataSectionContainer, DataContentsArea } from './data-section.styles'

export default function DataSection() {
	const resState: ResState = useResStore()

	return (
		<DataSectionContainer>
			<DataContentsArea resolution={resState.resolution}>
				<TabBar items={['High', 'Mid', 'Low']} />
				<DataSummary />
				<div id="charts-container">
					<PnlAnalysis />
					<WinRatioAnalysis />
					<TradingCountsAnalysis />
				</div>
			</DataContentsArea>
		</DataSectionContainer>
	)
}
