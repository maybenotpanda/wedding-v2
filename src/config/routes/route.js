import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import LocationPage from '../../pages/location'
import ThankYouPages from '../../pages/thank-you'

const HomePage = lazy(() => import('../../pages/home'))
const Page404 = lazy(() => import('../../pages/404'))

const RoutePage = () => {
	return (
		<Routes>
			<Route path=":slug" element={<HomePage />} />
			<Route path="/location" element={<LocationPage />} />
			<Route path='/makasih' element={<ThankYouPages />}/>
			<Route path="*" element={<Page404 />} />
		</Routes>
	)
}

export default RoutePage
