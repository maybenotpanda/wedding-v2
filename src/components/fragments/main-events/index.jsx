import React from 'react'
import CardEvent from 'components/elements/card-event'

const MainEvent = (props) => {
	return (
		<div className="grid gap-3 text-center">
			<h4>Wedding Schedule</h4>
			<h6>Dan kami bersyukur, dipertemukan allah di waktu terbaik. kini kami menanti hari istimewa kami.</h6>
			<CardEvent data={props.data} />
		</div>
	)
}

export default MainEvent
