import { useDataStore } from '../../store/dataStore'

import Card from '../card/card.component'
import BarChart from '../bar-chart/bar-chart.component'

export default function TradingCountsAnalysis() {
	const daytimeData = useDataStore((state) => state.daytimeData)
	const fulltimeData = useDataStore((state) => state.fulltimeData)

	const periods: string[] = fulltimeData.map((item) => item.date)

	const fulltimeCountData = fulltimeData.map((item) => ({
		total: item.total_trades,
		win: item.win_trades,
		loss: item.lose_trades,
	}))
	const daytimeCountData = daytimeData.map((item) => ({
		total: item.total_trades,
		win: item.win_trades,
		loss: item.lose_trades,
	}))

	return (
		<Card title={'Trading Counts'}>
			<BarChart
				fulltimeData={fulltimeCountData}
				daytimeData={daytimeCountData}
				labels={periods}
			/>
		</Card>
	)
}
