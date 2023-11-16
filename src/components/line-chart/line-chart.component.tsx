import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import ChartDataPick from '../chart-data-pick/chart-data-pick.component'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

type LineChartProps = {
	data: number[]
	labels: string[]
}

export default function LineChart(props: LineChartProps) {
	const { data, labels } = props

	const chartData = {
		labels: labels,
		datasets: [
			{
				data: data,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgb(53, 162, 235)',
				borderWidth: 4,
				tension: 0.5,
			},
		],
	}

	const options = {
		responsive: true,
		scales: {
			y: {
				grid: { display: false },
				ticks: { display: false },
			},
		},
	}

	return (
		<>
			<ChartDataPick average={5} highest={10} lowest={-5} scale="%" />
			<Line options={options} data={chartData} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0 1%',
				}}
			>
				{data
					? data.map((item, index) => (
							<p key={index} style={{ fontSize: '0.75rem' }}>
								{item}%
							</p>
					  ))
					: null}
			</div>
		</>
	)
}
