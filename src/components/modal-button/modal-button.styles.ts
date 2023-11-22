import styled from 'styled-components'

export const ModalButtonContainer = styled.button`
	all: unset;
	cursor: pointer;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.25rem;

	padding: 0.5rem 0.75rem;
	border-radius: 0.5rem;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	span {
		margin-top: 0.2rem;
		line-height: 100%;
		font-weight: 500;
	}

	&:active {
		background-color: #f1f1f1;
	}
`
