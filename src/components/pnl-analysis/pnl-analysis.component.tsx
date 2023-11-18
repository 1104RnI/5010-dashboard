import { useDataStore } from '../../store/store'

import Card from '../card/card.component'
import LineChart from '../line-chart/line-chart.component'

export default function PnlAnalysis() {
	const periods: string[] = useDataStore((state) => state.periods)
	const pnlData: number[] = useDataStore((state) => state.halfTimeData.pnlData)

	return (
		<Card title={'Profit & Loss'}>
			<LineChart data={pnlData} labels={periods} />
		</Card>
	)
}
