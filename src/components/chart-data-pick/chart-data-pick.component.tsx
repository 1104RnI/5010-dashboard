import { ChartDataPickContainer } from './chart-data-pick.styles'

type CountDetails = {
	total: number
	win: number
	loss: number
}

interface ChartDataPickProps {
	average?: number | CountDetails
	highest?: number | CountDetails
	lowest?: number | CountDetails
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
						{typeof average === 'number' ? average : null}
						{typeof average !== 'number' && average.total
							? average.total
							: null}
						{scale ? <span>{scale}</span> : null}
					</p>
					{typeof average !== 'number' && average.win && average.loss ? (
						<span className="details-text">
							{average.win}W {average.loss}L
						</span>
					) : null}
				</li>
			) : null}
			{highest ? (
				<li id="highest-data">
					<span>highest</span>
					<p>
						{typeof highest === 'number' ? highest : null}
						{typeof highest !== 'number' && highest.total
							? highest.total
							: null}
						{scale ? <span>{scale}</span> : null}
					</p>
					{typeof highest !== 'number' && highest.win && highest.loss ? (
						<span className="details-text">
							{highest.win}W {highest.loss}L
						</span>
					) : null}
				</li>
			) : null}
			{lowest ? (
				<li id="lowest-data">
					<span>lowest</span>
					<p>
						{typeof lowest === 'number' ? lowest : null}
						{typeof lowest !== 'number' && lowest.total ? lowest.total : null}
						{scale ? <span>{scale}</span> : null}
					</p>
					{/* {typeof lowest !== 'number' && lowest.win && lowest.loss ? (
						<span className="details-text">
							{lowest.win}W {lowest.loss}L
						</span>
					) : null} */}
					{typeof lowest !== 'number' && lowest.total ? (
						<span className="details-text">
							{lowest.win}W {lowest.loss}L
						</span>
					) : null}
				</li>
			) : null}
		</ChartDataPickContainer>
	)
}
