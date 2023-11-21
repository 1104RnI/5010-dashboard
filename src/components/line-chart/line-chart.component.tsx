import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { ResState, useResStore } from '../../store/stateStore'
import { getAverage } from '../../store/dataStore'

import ChartDataPick from '../chart-data-pick/chart-data-pick.component'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

type LineChartProps = {
	daytimeData?: number[]
	fulltimeData: number[]
	labels: string[]
}

export default function LineChart(props: LineChartProps) {
	const { fulltimeData, labels, daytimeData } = props
	const resState: ResState = useResStore()

	const chartData = {
		labels: labels.map((item) => item.substring(5, 10)),
		datasets: [
			{
				data: fulltimeData,
				borderColor: 'rgba(53, 162, 235, 0.5)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
				borderWidth: 4,
				tension: 0.5,
				pointRadius: 4,
				pointStyle: 'crossRot',
			},
			{
				data: daytimeData,
				borderColor: 'rgba(18, 189, 118, 0.5)',
				backgroundColor: 'rgba(18, 189, 118, 0.5)',
				borderWidth: 4,
				tension: 0.5,
				pointRadius: 4,
				pointStyle: 'crossRot',
			},
		],
	}

	const options = {
		responsive: true,
		aspectRatio: resState.resolution.isMobile ? 2 : 4,
		scales: {
			y: {
				grid: { display: false, drawBorder: false },
				ticks: { display: false },
			},
			x: {
				grid: { display: false },
				ticks: { display: resState.resolution.isMobile ? false : true },
			},
		},
	}

	return (
		<>
			<ChartDataPick
				average={
					Math.floor(
						getAverage(fulltimeData.filter((item) => item !== 0)) * 10,
					) / 10
				}
				highest={Math.max(...fulltimeData)}
				lowest={Math.min(...fulltimeData.filter((item) => item !== 0))}
				scale="%"
			/>
			<Line options={options} data={chartData} />
		</>
	)
}
