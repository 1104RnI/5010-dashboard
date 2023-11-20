import { useDataStore } from '../../store/dataStore'

import Card from '../card/card.component'
import LineChart from '../line-chart/line-chart.component'

export default function WinRatioAnalysis() {
	const data = useDataStore((state) => state.data)
	const periods: string[] = data.map((item) => item.date)
	const winRatioData: number[] = data.map((item) => item.win_rate)

	return (
		<Card title={'Win Ratio'}>
			<LineChart data={winRatioData} labels={periods} />
		</Card>
	)
}
