import { useDataStore, dataType } from '../../store/store'

import Card from '../card/card.component'
import LineChart from '../line-chart/line-chart.component'

export default function PnlAnalysis() {
	const pnlData: dataType = useDataStore((state) => state.pnlData)

	return (
		<Card title={'Profit & Loss'}>
			<LineChart data={pnlData.data} labels={pnlData.labels} />
		</Card>
	)
}
