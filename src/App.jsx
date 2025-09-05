// ** React Imports
import React, { Fragment, useEffect } from 'react'

// ** Config Imports
import Route from './config/routes/route'

// ** Aos Imports
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
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
