// ** React Imports
import React from 'react'

// ** Elements Imports
import CardEvent from 'components/elements/card-event'
import Head from 'components/elements/head'

const MainEvent = (props) => {
	return (
		<div className="h-screen py-2 grid justify-items-center content-center bg-primary">
			<div className="grid gap-4">
				<Head
					title="Wedding Schedule"
					description="Dan kami bersyukur, dipertemukan allah di waktu terbaik. kini kami menanti hari istimewa kami."
					color="white"
				/>
				<CardEvent data={props.data} />
			</div>
		</div>
	)
}

export default MainEvent
