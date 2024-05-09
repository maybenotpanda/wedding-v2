import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../../pages/home'))
const Page404 = lazy(() => import('../../pages/404'))

const RoutePage = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<Page404 />} />
		</Routes>
	)
}

export default RoutePage
