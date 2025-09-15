// ** React Imports
import React from 'react'

// ** Elements Imports
import CardEvent from 'components/elements/card-event'
import Head from 'components/elements/head'

const MainEvent = (props) => {
	return (
		<div className={`${props.type === "Keluarga" || props.type === "VIP" ? 'py-20' : 'h-screen'} py-2 grid justify-items-center content-center bg-primary`}>
			<div className="grid gap-4">
				<Head
					title="Wedding Schedule"
					description="Dan kami bersyukur, dipertemukan allah di waktu terbaik. kini kami menanti hari istimewa kami."
					color="white"
				/>
				<CardEvent data={props.data} type={props.type} />
			</div>
		</div>
	)
}

export default MainEvent
