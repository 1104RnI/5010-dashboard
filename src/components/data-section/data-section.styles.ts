import styled, { css } from 'styled-components'

import { ResolutionType } from '../../hooks/useResponsive'

export const DataSectionContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
`

export const DataContentsArea = styled.div<{ resolution: ResolutionType }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1rem;

	// Responsive web setting
	${(props) =>
		props.resolution.isDesktop &&
		css`
			max-width: 64rem;
			padding: 0 2rem 2rem 2rem;
		`}
	${(props) =>
		props.resolution.isTablet &&
		css`
			max-width: 54rem;
			padding: 0 2rem 2rem 2rem;
		`}
	${(props) =>
		props.resolution.isMobile &&
		css`
			max-width: 37.5rem;
			padding: 0 1.25rem 1.25rem 1.25rem;
		`}

    text-align: left;
`
