import React from 'react'

import cloud from 'assets/images/cloud.png'

const LocationPage = () => {
	return (
		<div className="h-screen flex justify-center items-center bg-background">
			<div className="grid gap-4 px-5">
				<h4 className="text-center text-secondary">THE WEDDING OF</h4>
				<h1 className="font-header text-center text-primary text-5xl">Mw & Reza</h1>
				<h4 className="text-center text-[#545454]">Lokasi Acara :</h4>
				<div className="grid gap-5">
					<a
						href="https://maps.app.goo.gl/FsAESiQC7XRW1Whe7"
						className="bg-primary text-white  hover:bg-[#0D2C46] text-center py-2 static">
						<h6>Akad</h6>
					</a>
					<a
						href="https://maps.app.goo.gl/WrvbPF5qC925nWaY9"
						className="bg-primary hover:bg-[#0D2C46] text-white text-center py-2 static">
						<h6>Resepsi</h6>
					</a>
				</div>
			</div>
			<div className="image-left2">
				<img className="bg-cover absolute top-0 left-0 w-20" src={cloud} alt="cloud" />
			</div>
			<div className="image-right2">
				<img className="bg-cover absolute bottom-0 right-0 w-20" src={cloud} alt="cloud" />
			</div>
			<div className="image-left">
				<img className="bg-cover absolute bottom-0 left-0 w-40" src={cloud} alt="cloud" />
			</div>
			<div className="image-right">
				<img className="bg-cover absolute top-0 right-0 w-48" src={cloud} alt="cloud" />
			</div>
		</div>
	)
}

export default LocationPage
