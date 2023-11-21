import { useDataStore } from '../../store/dataStore'

import Card from '../card/card.component'
import LineChart from '../line-chart/line-chart.component'

export default function PnlAnalysis() {
	const daytimeData = useDataStore((state) => state.daytimeData)
	const fulltimeData = useDataStore((state) => state.fulltimeData)

	const periods: string[] = fulltimeData.map((item) => item.date)

	const dayTimePnlData: number[] = daytimeData.map((item) => item.profit)
	const fulltimePnlData: number[] = fulltimeData.map((item) => item.profit)

	return (
		<Card title={'Profit & Loss'}>
			<LineChart
				fulltimeData={fulltimePnlData}
				daytimeData={dayTimePnlData}
				labels={periods}
			/>
		</Card>
	)
}
