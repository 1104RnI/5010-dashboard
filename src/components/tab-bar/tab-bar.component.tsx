import { FormEvent } from 'react'
import { useResStore, ResState } from '../../store/stateStore'

import { TabBarContainer } from './tab-bar.styles'

type TabBarProps = {
	items: string[]
	handleClick?: (e: FormEvent<HTMLInputElement>) => void
}

export default function TabBar(props: TabBarProps) {
	const { items, handleClick } = props

	const resState: ResState = useResStore()

	return (
		<TabBarContainer resolution={resState.resolution}>
			{items.map((tab, index) => (
				<label key={index}>
					<input
						type="radio"
						name="tab"
						value={tab}
						onClick={handleClick}
						defaultChecked={index === 0}
					/>
					<span>{tab}</span>
				</label>
			))}
		</TabBarContainer>
	)
}
