import { useDataStore } from '../../store/dataStore'

import Card from '../card/card.component'
import LineChart from '../line-chart/line-chart.component'

export default function PnlAnalysis() {
	const data = useDataStore((state) => state.data)
	const periods: string[] = data.map((item) => item.date)
	const pnlData: number[] = data.map((item) => item.profit)

	return (
		<Card title={'Profit & Loss'}>
			<LineChart data={pnlData} labels={periods} />
		</Card>
	)
}
