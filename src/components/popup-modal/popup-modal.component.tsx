import { ReactNode, MouseEventHandler } from 'react'

import { PopupModalContainer } from './popup-modal.styles'

type PopupModalProps = {
	item?: ReactNode | null
	handleBackgroundClick: MouseEventHandler<HTMLDivElement>
}

export default function PopupModal(props: PopupModalProps) {
	const { item, handleBackgroundClick } = props

	return (
		<PopupModalContainer>
			<div id="modal-background" onClick={handleBackgroundClick} />
			<div id="modal_box">{item ? item : <h5>Modal</h5>}</div>
		</PopupModalContainer>
	)
}
