import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import Card from '../card/card.component'
import ChartDataPick from '../chart-data-pick/chart-data-pick.component'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)
export const options = {
	responsive: true,
	scales: {
		y: {
			grid: { display: false },
			ticks: { display: false },
		},
	},
}

export const data = {
	labels: ['11.09', '11.10', '11.11', '11.12', '11.13', '11.14', '11.15'], // Data from server
	datasets: [
		{
			data: [2, 3, 4, 5, 4, 7, 8], // Data from server
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgb(53, 162, 235)',
			borderWidth: 4,
			tension: 0.5,
		},
	],
}

export default function PnlAnalysis() {
	return (
		<Card title={'Profit & Loss'}>
			<ChartDataPick average={5} highest={10} lowest={-5} scale="%" />
			<Line options={options} data={data} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0 1%',
				}}
			>
				{data.datasets[0].data.map((item, index) => (
					<p key={index} style={{ fontSize: '0.75rem' }}>
						{item}%
					</p>
				))}
			</div>
		</Card>
	)
}
