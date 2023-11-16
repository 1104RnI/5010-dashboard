import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { ResState, useResStore } from '../../store/store'

import ChartDataPick from '../chart-data-pick/chart-data-pick.component'

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Tooltip)

type BarChartProps = {
	data: {
		total: number[]
		win: number[]
		loss: number[]
	}
	labels: string[]
}

export default function BarChart(props: BarChartProps) {
	const { data, labels } = props
	const resState: ResState = useResStore()

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: 'loss',
				data: data.loss,
				borderColor: 'rgb(36, 117, 171)',
				backgroundColor: 'rgb(36, 117, 171)',
				barPercentage: 0.2,
				borderRadius: 100,
			},
			{
				label: 'win',
				data: data.win,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgb(53, 162, 235)',
				barPercentage: 0.2,
				borderRadius: 100,
			},
		],
	}

	const options = {
		responsive: true,
		aspectRatio: resState.resolution.isMobile ? 2 : 4,
		scales: {
			x: {
				grid: { display: false },
				stacked: true,
			},
			y: {
				grid: { display: false },
				ticks: { display: false },
				stacked: true,
			},
		},
	}

	return (
		<>
			<ChartDataPick
				average={{ total: 9, win: 6, loss: 3 }}
				highest={{ total: 12, win: 9, loss: 3 }}
				lowest={{ total: 4, win: 2, loss: 2 }}
			/>
			<Bar options={options} data={chartData} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				{data
					? data.total.map((item, index) => (
							<div key={index} style={{ textAlign: 'center' }}>
								<p style={{ fontSize: '0.75rem' }}>{item}</p>
								<p style={{ fontSize: '0.5rem' }}>
									{data.win[index]}W {data.loss[index]}L
								</p>
							</div>
					  ))
					: null}
			</div>
		</>
	)
}
