import { useDataStore } from '../../store/dataStore'

import Card from '../card/card.component'
import BarChart from '../bar-chart/bar-chart.component'

export default function TradingCountsAnalysis() {
	const data = useDataStore((state) => state.data)
	const periods: string[] = data.map((item) => item.date)
	// const countData = {
	// 	total: data.map((item) => item.total_trades),
	// 	win: data.map((item) => item.win_trades),
	// 	loss: data.map((item) => item.lose_trades),
	// }
	const countData = data.map((item) => ({
		total: item.total_trades,
		win: item.win_trades,
		loss: item.lose_trades,
	}))

	return (
		<Card title={'Trading Counts'}>
			<BarChart data={countData} labels={periods} />
		</Card>
	)
}
