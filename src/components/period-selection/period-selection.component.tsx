import { MouseEventHandler } from 'react'

import Button from '../button/button.component'

import { PeriodSelectionContainer } from './period-selection.styles'

type PeriodSelectionProps = {
	handleCancel: MouseEventHandler<HTMLButtonElement>
}

export default function PeriodSelection(props: PeriodSelectionProps) {
	const { handleCancel } = props

	return (
		<PeriodSelectionContainer>
			<h5>Select Data Period</h5>
			<div id="buttons-container">
				<Button
					text="Cancel"
					hierarchy="primary"
					appearance="system"
					handleClick={handleCancel}
				/>
				<Button text="Confirm" hierarchy="primary" appearance="accent" />
			</div>
		</PeriodSelectionContainer>
	)
}
