import { ChartDataPickContainer } from './chart-data-pick.styles'

type ChartDataPickProps = {
	average?: number
	highest?: number
	lowest?: number
	scale?: string
}

export default function ChartDataPick(props: ChartDataPickProps) {
	const { average, highest, lowest, scale } = props

	return (
		<ChartDataPickContainer>
			{average ? (
				<li id="average-data">
					average
					<p>
						{average}
						{scale ? <span>{scale}</span> : null}
					</p>
				</li>
			) : null}
			{highest ? (
				<li id="highest-data">
					<span>highest</span>
					<p>
						{highest}
						{scale ? <span>{scale}</span> : null}
					</p>
				</li>
			) : null}
			{lowest ? (
				<li id="lowest-data">
					<span>lowest</span>
					<p>
						{lowest}
						{scale ? <span>{scale}</span> : null}
					</p>
				</li>
			) : null}
		</ChartDataPickContainer>
	)
}
