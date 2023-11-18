import { useDataStore } from '../../store/store'

import Card from '../card/card.component'
import BarChart from '../bar-chart/bar-chart.component'

export default function TradingCountsAnalysis() {
	const periods: string[] = useDataStore((state) => state.periods)
	const countData = useDataStore((state) => state.halfTimeData.countData)

	return (
		<Card title={'Trading Counts'}>
			<BarChart data={countData} labels={periods} />
		</Card>
	)
}
