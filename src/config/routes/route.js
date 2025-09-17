import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LocationPage from '../../pages/location'
import ThankYouPages from '../../pages/thank-you'
import Loading from 'components/frame/loading'

const HomePage = lazy(() => import('pages/home'))

const RoutePage = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path=":slug" element={<HomePage />} />
				<Route path="/location" element={<LocationPage />} />
				<Route path='/makasih' element={<ThankYouPages />} />
				<Route path="*" element={<HomePage />} />
			</Routes>
		</Suspense>
	)
}

export default RoutePage
