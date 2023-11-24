import styled from 'styled-components'

export const PeriodSelectionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div#date-selected-text-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding-left: 0.5rem;
		padding-bottom: 1rem;

		div.text-container-column {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			width: 45%;

			span.text-bold {
				font-size: 0.75rem;
				font-weight: 600;
				margin-bottom: 0.25rem;
			}
		}
	}

	div#buttons-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		gap: 0.25rem;
	}
`
