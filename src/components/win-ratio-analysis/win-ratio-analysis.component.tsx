import { useDataStore } from '../../store/store'

import Card from '../card/card.component'
import LineChart from '../line-chart/line-chart.component'

export default function WinRatioAnalysis() {
	const periods: string[] = useDataStore((state) => state.periods)
	const winRatioData: number[] = useDataStore(
		(state) => state.halfTimeData.winRatioData,
	)

	return (
		<Card title={'Win Ratio'}>
			<LineChart data={winRatioData} labels={periods} />
		</Card>
	)
}
