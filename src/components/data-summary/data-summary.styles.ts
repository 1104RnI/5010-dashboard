import styled from 'styled-components'

export const DataSummaryContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 2rem;
`

export const SummaryContentContainer = styled.div`
	width: 14rem;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h5 {
		padding-bottom: 0.25rem;
		border-bottom: 0.0625rem solid #d1d1d1;
	}

	div#content-layout-div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;

		div#left-side-div {
			min-width: 14rem;
			h2 {
				font-size: 4rem;
				letter-spacing: -0.125rem;
			}
			h2 > span {
				font-size: 2.5rem;
			}
		}

		div#right-side-div {
			display: flex;
			flex-wrap: wrap;
			gap: 0.75rem;

			h2 > span {
				font-size: 1rem;
			}
		}

		p.subtitle {
			font-size: 0.75rem;
		}
	}
`
