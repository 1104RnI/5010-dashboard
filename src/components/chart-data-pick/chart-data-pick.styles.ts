import styled from 'styled-components'

export const ChartDataPickContainer = styled.ul`
	list-style: none;

	display: flex;
	gap: 1.5rem;

	padding: 0.5rem 0;

	li {
		font-size: 0.75rem;

		p {
			font-weight: bold;
			font-size: 2rem;

			span {
				font-size: 1.25rem;
			}
		}
	}
`