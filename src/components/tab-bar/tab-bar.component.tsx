import { useResStore, ResState } from '../../store/store'

import { TabBarContainer } from './tab-bar.styles'

type TabBarProps = {
	items: string[]
}

export default function TabBar(props: TabBarProps) {
	const items = props.items
	const resState: ResState = useResStore()

	return (
		<TabBarContainer resolution={resState.resolution}>
			{items.map((tab, index) => (
				<label key={index}>
					<input type="radio" name="tab" value={tab} />
					<span>{tab}</span>
				</label>
			))}
		</TabBarContainer>
	)
}
