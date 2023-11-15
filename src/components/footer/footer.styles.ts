import styled, { css } from 'styled-components'

import { ResolutionType } from '../../hooks/useResponsive'

export const FooterContainer = styled.div<{ resolution: ResolutionType }>`
	position: relative;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	padding: 1rem;

	background-color: #242424;
	color: #a6a6a6;

	p {
		// Responsive web setting
		${(props) =>
			props.resolution.isMobile
				? css`
						font-size: 0.5rem;
				  `
				: css`
						font-size: 0.75rem;
				  `}
	}
`
