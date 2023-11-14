import React, { useEffect } from 'react'
import './App.css'

import { ResState, useResStore } from './store/store'
import useResponsive, { ResolutionType } from './hooks/useResponsive'

import Heros from './components/heros/heros.component'
import NavBar from './components/nav-bar/nav-bar.component'
import TabBar from './components/tab-bar/tab-bar.component'
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
			<Heros />
			<NavBar />
			<TabBar />
			<Footer />
		</div>
	)
}

export default App
