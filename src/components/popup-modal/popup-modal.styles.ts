import styled from 'styled-components'

export const PopupModalContainer = styled.div`
	width: 100%;
	height: 100%;

	position: fixed;
	top: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	z-index: 100;

	div#modal-background {
		width: 100%;
		height: 100%;

		position: fixed;
		top: 0;

		background-color: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(0.5rem);
	}

	div#modal_box {
		width: 90%;
		max-width: 25rem;
		height: auto;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;

		z-index: 200;

		border-radius: 1rem;
		padding: 1.5rem 1.25rem;

		background: #ffffff;
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
	}
`
