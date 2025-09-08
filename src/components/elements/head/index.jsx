// ** React Imports
import React from 'react'

const Head = ({ title, description, color }) => {
	return (
		<div className="grid gap-1 py-2 px-4">
			<h2 data-aos="fade-up" className="font-description text-center text-secondary">
				{title}
			</h2>
			<h6 data-aos-duration="550" data-aos="fade-up" className={`text-center  ${color ? 'text-white' : 'text-black'}`}>
				{description}
			</h6>
		</div>
	)
}

export default Head
