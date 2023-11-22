import { MouseEventHandler, ReactElement } from 'react'

import { ModalButtonContainer } from './modal-button.styles'

type ModalButtonProps = {
	icon?: ReactElement
	text: string
	handleClick: MouseEventHandler<HTMLButtonElement>
}

export default function ModalButton(props: ModalButtonProps) {
	const { icon, text, handleClick } = props

	return (
		<ModalButtonContainer onClick={handleClick}>
			{icon}
			<span>{text}</span>
		</ModalButtonContainer>
	)
}
