import { useResStore, ResState } from '../../store/stateStore'

import { FooterContainer } from './footer.styles'

export default function Footer() {
	const resState: ResState = useResStore()

	return (
		<FooterContainer resolution={resState.resolution}>
			<p>©️ Copyright 1104 R&I. All Rights Reserved.</p>
		</FooterContainer>
	)
}
