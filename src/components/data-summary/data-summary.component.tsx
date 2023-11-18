import { DataType, getAverage } from '../../store/store'

import Card from '../card/card.component'

import {
	DataSummaryContainer,
	SummaryContentContainer,
} from './data-summary.styles'

type DataSummaryProps = {
	startTime: string
	endTime: string
	results: [halfTimeResult: DataType, fullTimeResult: DataType]
}

export default function DataSummary(props: DataSummaryProps) {
	const { startTime, endTime, results } = props

	return (
		<Card title={'Summary'}>
			<div style={{ marginBottom: '1.25rem' }}>
				<h5>Periods</h5>
				<p>
					{startTime} ~ {endTime}
				</p>
			</div>

			<DataSummaryContainer>
				{results.map((item, index) => (
					<SummaryContentContainer key={index}>
						<h5>Daytime(09:00 ~ 18:00) Result</h5>
						<div id="content-layout-div">
							<div id="left-side-div">
								<p className="subtitle">Profit & Loss</p>
								<h2>
									{getAverage(item.pnlData).toFixed(1)}
									<span>%</span>
								</h2>
							</div>
							<div id="right-side-div">
								<div className="content">
									<p className="subtitle">Win Ratio</p>
									<h2>{getAverage(item.winRatioData).toFixed(1)}%</h2>
								</div>
								<div className="content">
									<p className="subtitle">Tradings</p>
									<h2>{Math.floor(getAverage(item.countData.total))}</h2>
									<p className="subtitle">
										{Math.floor(getAverage(item.countData.win))}W{' '}
										{Math.floor(getAverage(item.countData.loss))}L
									</p>
								</div>
								<div className="content">
									<p className="subtitle">Deducted P&L</p>
									<h2>{getAverage(item.deductedPnlData).toFixed(1)}%</h2>
								</div>
							</div>
						</div>
					</SummaryContentContainer>
				))}
			</DataSummaryContainer>
		</Card>
	)
}
