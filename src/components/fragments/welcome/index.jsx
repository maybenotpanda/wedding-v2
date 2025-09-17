// ** React Imports
import React from 'react'

// ** Assets Imports
import background from 'assets/images/backgorud-home.jpg'

const Welcome = (props) => {
	// ! props
	const { isCover, closed, setClosed } = props

	return (
		<div
			className="h-screen bg-fixed bg-center bg-cover grid justify-items-center content-center"
			style={{ backgroundImage: `url(${background})` }}>
			<div className="window relative">
				<div
					className={`top ${isCover ? 'hidden' : 'top '} ${closed ? 'closed' : ''}`}
					onClick={() => setClosed(!closed)}></div>
				<div className="glass">
					<div className="sky">
						<div className="cloud" />
						<div className="cloud" />
						<div className="cloud" />
						<div className="cloud" />
						<div className="cloud" />
						<div className="cloud" />
						<div className="window-text">
							<h1 className="text-black text-center font-header text-5xl">MW</h1>
							<h4 className="text-black text-center font-header">&</h4>
							<h1 className="text-black text-center font-header text-5xl">Reza</h1>
						</div>
						<div className="nyan-cat" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Welcome
