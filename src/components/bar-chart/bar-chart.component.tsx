import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { ResState, useResStore } from '../../store/stateStore'
import { getAverage } from '../../store/dataStore'

import ChartDataPick from '../chart-data-pick/chart-data-pick.component'

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Tooltip)

type BarChartDataType = {
	total: number
	win: number
	loss: number
}

type BarChartProps = {
	daytimeData?: BarChartDataType[]
	fulltimeData: BarChartDataType[]
	labels: string[]
}

const getArray = (
	data: BarChartDataType[],
	selection: 'total' | 'win' | 'loss',
): number[] => {
	if (selection === 'total') {
		return data.map((item) => item.total)
	} else if (selection === 'win') {
		return data.map((item) => item.win)
	} else if (selection === 'loss') {
		return data.map((item) => item.loss)
	} else {
		return []
	}
}

const getHighest = (data: BarChartDataType[]) => {
	const highest = data.reduce((acc, item) =>
		item.total > acc.total ? item : acc,
	)
	return highest
}

const getLowest = (data: BarChartDataType[]) => {
	const newData = data.filter((item) => item.total !== 0)
	const lowest = newData.reduce(
		(acc, item) => (item.total < acc.total ? item : acc),
		getHighest(data),
	)
	return lowest
}

export default function BarChart(props: BarChartProps) {
	const { fulltimeData, daytimeData, labels } = props
	const resState: ResState = useResStore()

	const chartData = {
		labels: labels.map((item) => item.substring(5, 10)),
		datasets: [
			{
				label: 'loss',
				data: daytimeData?.map((item) => item.loss),
				borderColor: 'rgba(18, 119, 77, 0.75)',
				backgroundColor: 'rgba(18, 119, 77, 0.75)',
				barPercentage: 0.5,
				borderRadius: 100,
				stack: 'Stack 0',
			},
			{
				label: 'win',
				data: daytimeData?.map((item) => item.win),
				borderColor: 'rgba(18, 189, 118, 0.75)',
				backgroundColor: 'rgba(18, 189, 118, 0.75)',
				barPercentage: 0.5,
				borderRadius: 100,
				stack: 'Stack 0',
			},
			{
				label: 'loss',
				data: fulltimeData.map((item) => item.loss),
				borderColor: 'rgba(36, 117, 171, 0.75)',
				backgroundColor: 'rgba(36, 117, 171, 0.75)',
				barPercentage: 0.5,
				borderRadius: 100,
				stack: 'Stack 1',
			},
			{
				label: 'win',
				data: fulltimeData.map((item) => item.win),
				borderColor: 'rgba(53, 162, 235, 0.75)',
				backgroundColor: 'rgba(53, 162, 235, 0.75)',
				barPercentage: 0.5,
				borderRadius: 100,
				stack: 'Stack 1',
			},
		],
	}

	const options = {
		responsive: true,
		aspectRatio: resState.resolution.isMobile ? 2 : 4,
		scales: {
			x: {
				grid: { display: false },
				ticks: { display: resState.resolution.isMobile ? false : true },
				stacked: true,
			},
			y: {
				grid: { display: false, drawBorder: false },
				ticks: { display: false },
				stacked: true,
			},
		},
	}

	return (
		<>
			<ChartDataPick
				average={{
					total:
						Math.floor(getAverage(getArray(fulltimeData, 'total')) * 10) / 10,
					win: Math.floor(getAverage(getArray(fulltimeData, 'win')) * 10) / 10,
					loss:
						Math.floor(getAverage(getArray(fulltimeData, 'loss')) * 10) / 10,
				}}
				highest={{
					total: getHighest(fulltimeData).total,
					win: getHighest(fulltimeData).win,
					loss: getHighest(fulltimeData).loss,
				}}
				lowest={{
					total: getLowest(fulltimeData).total,
					win: getLowest(fulltimeData).win,
					loss: getLowest(fulltimeData).loss,
				}}
			/>
			<Bar options={options} data={chartData} />
		</>
	)
}
