import styled from 'styled-components'

export const ChartDataPickContainer = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 0 1.5rem 0 0;

	h5 {
		padding-bottom: 0.25rem;
		border-bottom: 0.0625rem solid #d1d1d1;
	}
`

export const DataContainer = styled.div`
	list-style: none;

	display: flex;
	gap: 1rem;

	li {
		font-size: 0.75rem;

		p {
			font-weight: bold;
			font-size: 1.75rem;
			letter-spacing: -0.075rem;

			span {
				font-size: 1rem;
			}
		}

		span.details-text {
			font-size: 0.75rem;
			font-weight: normal;
		}
	}
`
