// ** React Imports
import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { detailGuest } from 'config/store/modules/guest/action'

// ** Frame Imports
import Frame from 'components/frame/home'
import { useParams } from 'react-router-dom'

const HomePage = () => {
	const params = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(detailGuest(params.slug))
	}, [dispatch, params])

	return (
		<Fragment>
			<Frame />
		</Fragment>
	)
}

export default HomePage
