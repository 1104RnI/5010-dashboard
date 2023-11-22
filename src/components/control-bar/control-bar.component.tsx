import { useState, useEffect, FormEvent } from 'react'

import {
	ResState,
	IndicatorType,
	useResStore,
	useIndicatorStore,
} from '../../store/stateStore'

import TabBar from '../tab-bar/tab-bar.component'
import ModalButton from '../modal-button/modal-button.component'
import PopupModal from '../popup-modal/popup-modal.component'
import { ReactComponent as CalendarIcon } from '../../assets/svg/calendar-icon.svg'

import {
	ControlBarContainer,
	ControlBarContentsArea,
} from './control-bar.styles'

export default function ControlBar() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const resState: ResState = useResStore()
	// const indicatorState = useIndicatorStore((state) => state.indicatorType)
	const changeState = useIndicatorStore(
		(state) => (e: FormEvent<HTMLInputElement>) => {
			state.setIndicatorType(
				e.currentTarget.value.toLowerCase() as IndicatorType,
			)
		},
	)

	const handleModalOpen = () => {
		setIsModalOpen(!isModalOpen)
		console.log(`clicked, ${isModalOpen}`)
	}

	useEffect(() => {
		document.body.style.overflow = isModalOpen ? 'hidden' : 'unset'
	}, [isModalOpen])

	return (
		<ControlBarContainer>
			<ControlBarContentsArea resolution={resState.resolution}>
				<TabBar items={['High', 'Mid', 'Low']} handleClick={changeState} />
				<ModalButton
					text="Set Period"
					icon={<CalendarIcon />}
					handleClick={handleModalOpen}
				/>
			</ControlBarContentsArea>
			{isModalOpen ? (
				<PopupModal handleBackgroundClick={handleModalOpen} />
			) : null}
		</ControlBarContainer>
	)
}
