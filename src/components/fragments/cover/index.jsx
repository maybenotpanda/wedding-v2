// ** React Imports
import React, { Fragment, useEffect, useState } from 'react'

import { Howl } from "howler";

import {
	BsPlayFill,
	BsFillGridFill,
	// BsBox2HeartFill,
	BsFillPauseFill,
	BsHouseHeartFill,
	// BsBalloonHeartFill,
	BsPersonHeart,
	BsFillCalendarHeartFill,
} from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

// ** Assets Imports
import background from 'assets/images/cover.jpg'
import SlideButton from 'components/elements/slide-button'
import music from "assets/music/bandaneira-sampai-jadi-debu.mp3";

const Cover = ({ name, isCover, setIsCover }) => {
	const [coverAnimation, setCoverAnimation] = useState('')
	const [isPlaying, setIsPlaying] = useState(true);
	const [sound, setSound] = useState(null);
	const [isMenu, setIsMenu] = useState(false);

	useEffect(() => {
		const newSound = new Howl({
			src: [music],
			autoplay: true,
			onend: () => {
				setIsPlaying(true);
			},
		});

		setSound(newSound);

		return () => {
			newSound.unload();
		};
	}, []);

	const handleMenu = () => {
		setIsMenu(!isMenu);
	};

	const handlePlayPause = () => {
		if (sound) {
			if (isPlaying) {
				sound.pause();
			} else {
				sound.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

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

	const handleMainMenu = (sectionId) => {
		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		} else {
			console.error(`Element with ID ${sectionId} not found.`);
		}
	};

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
									<h6 className="w-full text-center text-white font-serif">Dear Mr./Mrs./Ms.</h6>
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
				<>
					<div
						className="fixed bottom-0 left-0 mb-2 ml-2"
						style={{ zIndex: 2 }}
					>
						{isMenu ? (
							<div className="flex gap-2 justify-center items-center">
								<button
									className="p-4 bg-primary text-secondary rounded-full"
									onClick={handleMenu}
								>
									<IoCloseSharp />
								</button>
								<button
									className="p-2 bg-selected text-secondary rounded-full text-sm"
									onClick={() => handleMainMenu("home")}
								>
									<BsHouseHeartFill />
								</button>
								<button
									className="p-2 bg-selected text-secondary rounded-full text-sm"
									onClick={() => handleMainMenu("profile")}
								>
									<BsPersonHeart />
								</button>
								<button
									className="p-2 bg-selected text-secondary rounded-full text-sm"
									onClick={() => handleMainMenu("events")}
								>
									<BsFillCalendarHeartFill />
								</button>
								{/*
                <button
                  className="p-2 bg-selected text-secondary rounded-full text-sm"
                  onClick={() => handleMainMenu("gift")}
                >
                  <BsBox2HeartFill />
                </button>
                <button
                  className="p-2 bg-selected text-secondary rounded-full text-sm"
                  onClick={() => handleMainMenu("gallery")}
                >
                  <BsBalloonHeartFill />
                </button>
                */}
							</div>
						) : (
							<button
								className="p-4 bg-selected text-secondary rounded-full"
								onClick={handleMenu}
							>
								<BsFillGridFill />
							</button>
						)}
					</div>
					<div
						className="fixed bottom-0 right-0 mb-2 mr-2"
						style={{ zIndex: 2 }}
					>
						{isPlaying ? (
							<button
								className="p-4 bg-primary text-secondary rounded-full"
								onClick={handlePlayPause}
							>
								<BsFillPauseFill />
							</button>
						) : (
							<button
								className="p-4 bg-selected text-secondary rounded-full"
								onClick={handlePlayPause}
							>
								<BsPlayFill />
							</button>
						)}
					</div>
				</>
			)}
		</Fragment>
	)
}

export default Cover
