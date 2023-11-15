import { TabBarContainer } from './tab-bar.styles'

type TabBarProps = {
	items: string[]
}

export default function TabBar(props: TabBarProps) {
	const items = props.items

	return (
		<TabBarContainer>
			{items.map((tab, index) => (
				<label key={index}>
					<input type="radio" name="tab" value={tab} />
					<span>{tab}</span>
				</label>
			))}
		</TabBarContainer>
	)
}
