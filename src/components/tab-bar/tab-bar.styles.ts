import styled from 'styled-components'

export const TabBarContainer = styled.div`
	display: flex;
	gap: 0.25rem;
	height: 2rem;

	span {
		padding: 0.25rem 0.5rem;
	}

	[type='radio'] {
		appearance: none;
	}

	[type='radio']:checked ~ span {
		border-bottom: 0.4em solid black;
		font-weight: bold;
	}
`
