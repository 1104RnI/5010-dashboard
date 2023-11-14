import { useResStore, ResState } from '../../store/store'

import { HerosContainer, HerosContentsArea } from './heros.styles'

import Lottie from 'lottie-react'
import herosAnim from '../../assets/lottie/heros-anim.json'

export default function Heros() {
	const resState: ResState = useResStore()

	return (
		<HerosContainer>
			<HerosContentsArea resolution={resState.resolution}>
				<div id="left-side-div">
					<h1>5010 Dashboard</h1>
					<p>for 5010 Indicator Performances</p>
				</div>
				<div id="right-side-div">
					<Lottie animationData={herosAnim} />
				</div>
			</HerosContentsArea>
		</HerosContainer>
	)
}
