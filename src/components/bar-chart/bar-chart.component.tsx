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
	data: BarChartDataType[]
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
	const { data, labels } = props
	const resState: ResState = useResStore()

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: 'loss',
				data: data.map((item) => item.loss),
				borderColor: 'rgb(36, 117, 171)',
				backgroundColor: 'rgb(36, 117, 171)',
				barPercentage: 0.2,
				borderRadius: 100,
			},
			{
				label: 'win',
				data: data.map((item) => item.win),
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
				ticks: { display: resState.resolution.isMobile ? false : true },
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
				average={{
					total: Math.floor(getAverage(getArray(data, 'total')) * 10) / 10,
					win: Math.floor(getAverage(getArray(data, 'win')) * 10) / 10,
					loss: Math.floor(getAverage(getArray(data, 'loss')) * 10) / 10,
				}}
				highest={{
					total: getHighest(data).total,
					win: getHighest(data).win,
					loss: getHighest(data).loss,
				}}
				lowest={{
					total: getLowest(data).total,
					win: getLowest(data).win,
					loss: getLowest(data).loss,
				}}
			/>
			<Bar options={options} data={chartData} />
			{/* {!resState.resolution.isMobile ? (
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
			) : null} */}
		</>
	)
}
