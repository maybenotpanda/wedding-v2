// ** React Imports
import React from 'react'

// ** Elements Imports
import Head from 'components/elements/head'

// ** Assets Imports
import men from 'assets/images/men.png'
import women from 'assets/images/women.png'
import cloud from 'assets/images/cloud.png'
import background from 'assets/images/background-about.jpg'
import airplane from 'assets/images/pesawat 1.png'

const AboutUs = () => {
	return (
		<div className="relative bg-fixed bg-center bg-cover py-2" style={{ backgroundImage: `url(${background})` }}>
			<div className="absolute inset-0 bg-background/95"></div>
			<Head
				title="Assalamualaikum Wr. Wb."
				description="Tanpa mengurangi rasa hormat, kami mengundang bapak/ibu/sudara/i serta kerabat sekalian untuk menghadiri acara
				pernikahan kami"
			/>
			<div className="grid gap-5">
				<div className="grid gap-2 justify-items-start">
					<div className="relative mb-8">
						<div className="image-left">
							<img src={airplane} alt="airplane" className="absolute top-10 right-0 w-20 h-auto" />
						</div>
						<img src={women} alt="mw" className="h-64 mx-auto" data-aos="fade-up-right" data-aos-duration="1500" />
						<div className="image-right2">
							<img
								src={cloud}
								alt="cloud"
								className="absolute -bottom-6 right-0 w-full h-auto"
								data-aos="zoom-in-up"
								data-aos-duration="1000"
							/>
						</div>
						{/*<h1 className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-black font-header">MW</h1>*/}
					</div>
					<div className="pl-4">
						<h3 className="font-header text-secondary" data-aos="fade-up-right">
							MW Putri Meilinia H. Purba, S.Kom
						</h3>
						<h6 className="text-left text-[#545454]" data-aos="fade-up-right">
							Putri Ketiga dari Pasangan
						</h6>
						<h6 className="text-black" data-aos="fade-up-right">
							Bapak Kawaluddin Hasyim Purba & Ibu Evienda Ginting
						</h6>
					</div>
				</div>
				<h1 className="text-center font-header text-6xl text-secondary/45" data-aos="zoom-in" data-aos-duration="3000">
					&
				</h1>
				<div className="grid gap-2 justify-items-end">
					<div className="relative mb-8">
						<div className="image-right">
							<img src={airplane} alt="airplane" className="absolute -top-0 w-24 h-auto" />
						</div>
						<img src={men} alt="reza" className="h-64 mx-auto" data-aos="fade-up-left" data-aos-duration="1500" />
						<div className="image-right2">
							<img
								src={cloud}
								alt="cloud"
								className="absolute -bottom-6 left-0 w-full h-auto"
								data-aos="zoom-in-up"
								data-aos-duration="1000"
							/>
						</div>
						{/*<h1 className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-black font-header">Reza</h1>*/}
					</div>
					<div className="pr-4">
						<h2 className="font-header text-right text-secondary" data-aos="fade-up-left">
							Muhammad Fariz Dzuhreza, S.Kom
						</h2>
						<h6 className="text-right text-[#545454]" data-aos="fade-up-left">
							Putra Tunggal dari Pasangan
						</h6>
						<h6 className="text-right text-black" data-aos="fade-up-left">
							Bapak Edi Susanto & Ibu Retno Jumini
						</h6>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutUs
