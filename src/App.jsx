// ** React Imports
import React, { Fragment, useEffect } from 'react'

// ** Aos Imports
import AOS from 'aos'
import 'aos/dist/aos.css'

// ** Config Imports
import Route from './config/routes/route'

const App = () => {
	// ! hooks
	// * effect
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<Fragment>
			<Route />
		</Fragment>
	)
}
export default App
