// ** React Imports
import React, { Fragment, useEffect, useState } from 'react'

// ** Howler Imports
import { Howl } from 'howler'

// ** Icons Imports
import { BsPlayFill, BsFillPauseFill } from 'react-icons/bs'

// ** Assets Imports
import background from 'assets/images/cover.png'
import SlideButton from 'components/elements/slide-button'
import music from 'assets/music/bandaneira-sampai-jadi-debu.mp3'

const Cover = ({ name, isCover, setIsCover }) => {
	// ! hooks
	// * state
	const [coverAnimation, setCoverAnimation] = useState('')
	const [isPlaying, setIsPlaying] = useState(true)
	const [sound, setSound] = useState(null)
	const [showSlider, setShowSlider] = useState(false)

	// * effect
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

	// ! handle
	const handleLockClick = () => {
		setShowSlider(true)
	}

	const handleCover = () => {
		setCoverAnimation('cover-animation-enter')
		if (!sound) {
			const newSound = new Howl({
				src: [music],
				loop: true,
				volume: 0
			})

			newSound.play()
			newSound.fade(0, 1, 2000)

			setSound(newSound)
			setIsPlaying(true)
		}
		setTimeout(() => {
			setIsCover(false)
			setCoverAnimation('')
		}, 1000)
	}

	const handlePlayPause = () => {
		if (sound) {
			if (isPlaying) {
				sound.fade(sound.volume(), 0, 2000)
				setTimeout(() => {
					sound.pause()
					sound.volume(1)
				}, 2000)
			} else {
				sound.play()
				sound.volume(0)
				sound.fade(0, 1, 2000)
			}
			setIsPlaying(!isPlaying)
		}
	}

	return (
		<Fragment>
			{isCover ? (
				<div className={`fixed lg:w-2/5 h-screen w-screen right-0 top-0 ${coverAnimation}`} style={{ zIndex: 2 }}>
					<div className="absolute inset-0 overflow-hidden brightness-50">
						<img className="h-full w-full object-cover bg-center" src={background} alt="cover" />
					</div>
					<div className="h-screen relative grid content-between py-28 px-4">
						<div className="grid gap-4">
							<span className="text-center pb-3 text-lg text-primary font-medium text-title">The Wedding Of</span>
							<h1 className="font-header text-5xl text-secondary text-center">MW & Reza</h1>
						</div>
						<div className="grid inset-x-0 justify-items-center z-50 gap-3">
							{name ? (
								<Fragment>
									<h6 className="w-full text-center text-white font-serif">Dear Mr./Mrs./Ms.</h6>
									<h5 className="text-secondary italic font-serif font-bold text-center w-full break-all">{name}</h5>
								</Fragment>
							) : (
								<h5 className="text-red-700 font-serif">Mohon maaf anda tidak ada dalam panggilan</h5>
							)}
							{!showSlider ? (
								<button className="bg-primary relative w-60 border-2 rounded-full h-12 text-white text-[0.875rem] text-center" onClick={handleLockClick}>
									🔓 Unlock Invitation
								</button>
							) : (
							<SlideButton onSlide={handleCover} disabled={!name} />
							)}
						</div>
					</div>
				</div>
			) : (
				<div className="fixed bottom-4 right-2 mb-2 mr-2" style={{ zIndex: 2 }}>
					{isPlaying ? (
						<button className="p-4 bg-secondary text-primary rounded-full" onClick={handlePlayPause}>
							<BsFillPauseFill />
						</button>
					) : (
						<button className="p-4 bg-black text-secondary rounded-full" onClick={handlePlayPause}>
							<BsPlayFill />
						</button>
					)}
				</div>
			)}
		</Fragment>
	)
}

export default Cover
