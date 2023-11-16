import Card from '../card/card.component'

export default function DataSummary() {
	return (
		<Card title={'Summary'}>
			<div style={{ marginBottom: '1.25rem' }}>
				<h5>Periods</h5>
				<p>11.09. ~ 11.15.</p>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div style={{ width: '100%' }}>
					<h5>Daytime(09:00 ~ 18:00) Results</h5>
					<div
						style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
					>
						<div>
							<p>P&L</p>
							<h2>50%</h2>
						</div>
						<div>
							<p>Win Ratio</p>
							<h2>80%</h2>
						</div>
						<div>
							<p>Trading Counts</p>
							<h2>50</h2>
							<p>35W 15L</p>
						</div>
						<div>
							<p>Deducted P&L</p>
							<h2>50%</h2>
						</div>
					</div>
				</div>

				<div style={{ width: '100%' }}>
					<h5>Fulltime(24h) Results</h5>
					<div
						style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
					>
						<div>
							<p>P&L</p>
							<h2>50%</h2>
						</div>
						<div>
							<p>Win Ratio</p>
							<h2>80%</h2>
						</div>
						<div>
							<p>Trading Counts</p>
							<h2>50</h2>
							<p>35W 15L</p>
						</div>
						<div>
							<p>Deducted P&L</p>
							<h2>50%</h2>
						</div>
					</div>
				</div>
			</div>
		</Card>
	)
}
