import styled, { css } from 'styled-components'

import { ResolutionType } from '../../hooks/useResponsive'

export const HerosContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
`

export const HerosContentsArea = styled.div<{ resolution: ResolutionType }>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	// Responsive web setting
	${(props) =>
		props.resolution.isDesktop &&
		css`
			max-width: 64rem;
			padding: 2.5rem;
		`}
	${(props) =>
		props.resolution.isTablet &&
		css`
			max-width: 54rem;
			padding: 2.5rem;
		`}
	${(props) =>
		props.resolution.isMobile &&
		css`
			max-width: 37.5rem;
			padding: 1.25rem;
		`}

	div#left-side-div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;

		p {
			margin-left: 0.2rem;
		}
	}

	div#right-side-div {
		width: 10rem;
		display: flex;
	}
`
