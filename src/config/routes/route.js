// ** React Imports
import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// ** Frame Imports
import Loading from 'components/frame/loading'

// ** Pages Imports with lazy
const Home = lazy(() => import('pages/home'))
const Location = lazy(() => import('pages/location'))
const ThankYou = lazy(() => import('pages/thank-you'))

const RoutePage = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path=":slug" element={<Home />} />
				<Route path="/location" element={<Location />} />
				<Route path="/makasih" element={<ThankYou />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</Suspense>
	)
}

export default RoutePage
