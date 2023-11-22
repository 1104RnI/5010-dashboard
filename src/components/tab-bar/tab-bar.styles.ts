import styled, { css } from 'styled-components'

import { ResolutionType } from '../../hooks/useResponsive'

export const TabBarContainer = styled.form<{ resolution: ResolutionType }>`
	display: flex;
	height: 2rem;
	gap: 0.25rem;

	margin-top: 1rem;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	span {
		cursor: pointer;

		// Responsive web setting
		${(props) =>
			props.resolution.isMobile
				? css`
						padding: 0.2rem 0.2rem;
				  `
				: css`
						padding: 0.25rem 0.5rem;
				  `}
	}

	[type='radio'] {
		appearance: none;
	}

	[type='radio']:checked ~ span {
		border-bottom: 0.4em solid black;
		font-weight: bold;
	}
`
