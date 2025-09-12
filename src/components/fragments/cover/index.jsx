// ** React Imports
import React, { Fragment, useEffect, useState } from 'react'

// ** Assets Imports
import background from 'assets/images/cover.jpg'
import SlideButton from 'components/elements/slide-button'

const Cover = ({ name, isCover, setIsCover }) => {
	const [coverAnimation, setCoverAnimation] = useState('')

	useEffect(() => {
		if (isCover) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isCover])

	const handleCover = () => {
		setCoverAnimation('cover-animation-enter')
		setTimeout(() => {
			setIsCover(false)
			setCoverAnimation('')

		}, 1000)
	}

	return (
		<Fragment>
			{isCover ? (
				<div className={`fixed lg:w-2/5 h-screen w-screen right-0 top-0 ${coverAnimation}`} style={{ zIndex: 2 }}>
					<div className="absolute inset-0 overflow-hidden brightness-50">
						<img className="h-full w-full object-cover bg-center" src={background} alt="cover" />
					</div>
					<div className="h-screen relative grid content-between py-28">
						<div className="grid gap-4">
							<span className="text-center pb-3 text-lg text-primary font-medium text-title">The Wedding Of</span>
							<h1 className="font-header text-5xl text-secondary text-center">MW & Reza</h1>
						</div>
						<div className="grid inset-x-0 justify-items-center z-50 gap-3">
							{name ? (
								<Fragment>
									<h6 className="w-full text-center text-white font-serif">Dear To Mr./Mrs./Ms.</h6>
									<h5 className="text-secondary italic font-serif font-bold text-center">{name}</h5>
								</Fragment>
							) : (
								<h5 className="text-red-700 font-serif">Mohon maaf anda tidak ada dalam panggilan</h5>
							)}
							<SlideButton onSlide={handleCover} disabled={!name} />
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</Fragment>
	)
}

export default Cover
