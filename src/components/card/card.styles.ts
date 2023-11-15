import styled, { css } from 'styled-components'

import { ResolutionType } from '../../hooks/useResponsive'

export const CardContainer = styled.div<{ resolution: ResolutionType }>`
	width: 100%;
	display: flex;
	flex-direction: column;

	background-color: #f3f3f3;
	border-radius: 1.25rem;

	// Responsive web setting
	${(props) =>
		props.resolution.isMobile
			? `padding: 1.5rem 1rem; gap: 0.75rem;`
			: `padding: 2rem; gap: 1rem;`}
`
