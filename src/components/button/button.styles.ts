import styled, { css } from 'styled-components'

import { ButtonAppearance, ButtonHierarchy } from './button.component'

export const ButtonContainer = styled.button<{
	appearance: ButtonAppearance
	hierarchy: ButtonHierarchy
}>`
	all: unset;
	cursor: pointer;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.25rem;

	padding: 0.75rem 1rem;
	border-radius: 0.5rem;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	span {
		${(props) =>
			props.appearance === 'accent' &&
			css`
				color: #000000;
			`}
		${(props) =>
			props.appearance === 'neutral' &&
			css`
				color: #000000;
			`}
      ${(props) =>
			props.appearance === 'system' &&
			css`
				color: #ff5656;
			`}
    
    ${(props) =>
			props.hierarchy === 'primary' &&
			css`
				font-weight: bold;
			`}
    ${(props) =>
			props.hierarchy === 'secondary' &&
			css`
				font-weight: normal;
			`}
	}

	&:active {
		background-color: #f1f1f1;
	}
`
