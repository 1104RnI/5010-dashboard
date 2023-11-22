import styled, { css } from 'styled-components'

import { ResolutionType } from '../../hooks/useResponsive'

export const ControlBarContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
`

export const ControlBarContentsArea = styled.div<{
	resolution: ResolutionType
}>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	// Responsive web setting
	${(props) =>
		props.resolution.isDesktop &&
		css`
			max-width: 64rem;
			padding: 1rem 2rem;
		`}
	${(props) =>
		props.resolution.isTablet &&
		css`
			max-width: 54rem;
			padding: 1rem 2rem;
		`}
	${(props) =>
		props.resolution.isMobile &&
		css`
			max-width: 37.5rem;
			padding: 0.5rem 1.25rem;
		`}
`
