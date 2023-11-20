import { ReactNode } from 'react'
import { useResStore, ResState } from '../../store/stateStore'

import { CardContainer } from './card.styles'

type CardProps = {
	title?: string | null
	children?: ReactNode | null
}

export default function Card(props: CardProps) {
	const resState: ResState = useResStore()

	return (
		<CardContainer resolution={resState.resolution}>
			{props.title ? <h2>{props.title}</h2> : null}
			{props.children}
		</CardContainer>
	)
}
