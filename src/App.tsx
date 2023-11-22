import React, { useEffect } from 'react'
import './App.css'

import { ResState, useResStore } from './store/stateStore'
import useResponsive, { ResolutionType } from './hooks/useResponsive'

import Heros from './components/heros/heros.component'
import ControlBar from './components/control-bar/control-bar.component'
import DataSection from './components/data-section/data-section.component'
import Footer from './components/footer/footer.component'

function App() {
	const res: ResolutionType = useResponsive()
	const resState: ResState = useResStore()

	useEffect(() => {
		resState.setResolution(res)
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [res])

	return (
		<div className="App">
			<div id="body-container" style={{ minHeight: '100vh' }}>
				<Heros />
				<ControlBar />
				<DataSection />
			</div>
			<Footer />
		</div>
	)
}

export default App
