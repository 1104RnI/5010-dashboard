import { useDataStore } from '../../store/dataStore'

import Card from '../card/card.component'
import LineChart from '../line-chart/line-chart.component'

export default function WinRatioAnalysis() {
	const daytimeData = useDataStore((state) => state.daytimeData)
	const fulltimeData = useDataStore((state) => state.fulltimeData)

	const periods: string[] = fulltimeData.map((item) => item.date)

	const daytimeWinRatioData: number[] = daytimeData.map((item) => item.win_rate)
	const fulltimeWinRatioData: number[] = fulltimeData.map(
		(item) => item.win_rate,
	)

	return (
		<Card title={'Win Ratio'}>
			<LineChart
				fulltimeData={fulltimeWinRatioData}
				daytimeData={daytimeWinRatioData}
				labels={periods}
			/>
		</Card>
	)
}
