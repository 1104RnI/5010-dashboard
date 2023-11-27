import { MouseEventHandler, useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'

import { usePeriodStore, PeriodState } from '../../store/stateStore'

import Button from '../button/button.component'

import { PeriodSelectionContainer } from './period-selection.styles'

type ValuePiece = Date | null
type CalendarValue = ValuePiece | [ValuePiece, ValuePiece]

type PeriodSelectionProps = {
	handleCancel: MouseEventHandler<HTMLButtonElement>
}

const getType = (target: any) =>
	Object.prototype.toString.call(target).slice(8, -1)

const getDate = (date: CalendarValue) => {
	if (getType(date) === 'Date') {
		const startDate = date as ValuePiece
		return [startDate] as [Date]
	} else if (getType(date) === 'Array') {
		const [startDate, endDate] = date as [ValuePiece, ValuePiece]
		return [startDate, endDate] as [Date, Date]
	} else return [new Date()]
}

export default function PeriodSelection(props: PeriodSelectionProps) {
	const { handleCancel } = props
	const [date, setDate] = useState<CalendarValue>(new Date())
	const period: PeriodState = usePeriodStore()

	const handleConfirm: MouseEventHandler<HTMLButtonElement> = () => {
		period.setPeriod(getDate(date)[0], getDate(date)[1])
	}

	return (
		<PeriodSelectionContainer>
			<h5>Select Data Period</h5>
			<Calendar
				selectRange
				// value={date}
				onChange={setDate}
				onClickDay={setDate}
				maxDate={new Date()}
				minDate={period.serviceStartDate}
			></Calendar>
			<div id="date-selected-text-container">
				<div className="text-container-column" id="first-column">
					<span className="text-bold">From </span>
					<p>{getDate(date)[0]?.toLocaleDateString('ko-KR')}</p>
				</div>
				<div className="text-container-column" id="second-column">
					<span className="text-bold">To </span>
					<p>{getDate(date)[1]?.toLocaleDateString('ko-KR')}</p>
				</div>
			</div>

			<div id="buttons-container">
				<Button
					text="Cancel"
					hierarchy="primary"
					appearance="system"
					handleClick={handleCancel}
				/>
				<Button
					text="Confirm"
					hierarchy="primary"
					appearance="accent"
					handleClick={(event) => {
						handleConfirm(event)
						handleCancel(event)
					}}
					disabled={!(getDate(date).length > 1)}
				/>
			</div>
		</PeriodSelectionContainer>
	)
}
