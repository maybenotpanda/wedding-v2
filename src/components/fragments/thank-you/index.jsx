// ** React Imports
import React from 'react'

// ** Assets Imports
import background from 'assets/images/1.jpg'

const ThankYouFragments = () => {
	return (
		<div className="h-screen grid gap-4 content-center justify-items-center text-center relative bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
			<div className="absolute inset-0 bg-gradient-to-t from-black/100"></div>
			<div className="relative grid gap-1">
				<h6 className="text-white" data-aos="fade-up" data-aos-duration="400">
					Atas Perhatian dan pengertianya, kami mengucapkan banyak terima kasih
				</h6>
				<h4 className="text-white" data-aos="fade-up" data-aos-duration="800">
					Wassalamu'alaikum Wr. Wb.
				</h4>
			</div>
			<h1 className="relative  font-header text-secondary" data-aos="fade-up" data-aos-duration="1200">
				MW & Reza
			</h1>
		</div>
	)
}

export default ThankYouFragments
