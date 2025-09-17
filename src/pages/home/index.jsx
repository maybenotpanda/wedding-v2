// ** React Imports
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// ** Store Imports
import { listMessages } from 'config/store/modules/messages/actions'
import { detailGuest } from 'config/store/modules/guest/action'
import { createMessage } from 'config/store/modules/messages/actions'

// ** Frame Imports
import Frame from 'components/frame/home'

const HomePage = () => {
	// ! dependency
	const dispatch = useDispatch()

	// ! params
	const params = useParams()

	// ! hooks
	// * state
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(10)

	// * effect
	useEffect(() => {
		dispatch(listMessages({ page: page - 1, limit }))
		dispatch(detailGuest(params.slug))
	}, [dispatch, params, page, limit])

	return (
		<Fragment>
			<Frame page={page} limit={limit} setPage={setPage} setLimit={setLimit} data={(e) => dispatch(createMessage({ ...e }))} />
		</Fragment>
	)
}

export default HomePage
