import styled, { css } from 'styled-components'

import { ResolutionType } from '../../hooks/useResponsive'

export const TabBarContainer = styled.div<{ resolution: ResolutionType }>`
	display: flex;
	height: 2rem;
	gap: 0.25rem;

	span {
		// Responsive web setting
		${(props) =>
			props.resolution.isMobile
				? css`
						padding: 0.2rem 0.25rem;
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
