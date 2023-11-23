import { MouseEventHandler, useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'

import { usePeriodStore, PeriodState } from '../../store/stateStore'

import Button from '../button/button.component'

import { PeriodSelectionContainer } from './period-selection.styles'
import { Value } from 'react-calendar/dist/cjs/shared/types'

type PeriodSelectionProps = {
	handleCancel: MouseEventHandler<HTMLButtonElement>
}

export default function PeriodSelection(props: PeriodSelectionProps) {
	const { handleCancel } = props
	const [date, setDate] = useState<Value>(new Date())
	const period: PeriodState = usePeriodStore() // ← get 'setPeriod' and call on confirmation

	useEffect(() => {
		console.log(date)
	}, [date])

	return (
		<PeriodSelectionContainer>
			<h5>Select Data Period</h5>
			<Calendar
				selectRange
				value={date}
				onChange={setDate}
				defaultValue={date}
				maxDate={new Date()}
				minDate={period.serviceStartDate}
			></Calendar>
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
