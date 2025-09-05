// ** React Imports
import React, { Fragment } from 'react'

// ** Elements Imports
import Head from 'components/elements/head'

// ** Assets Imports
import men from 'assets/images/men.png'
import women from 'assets/images/women.png'

const AboutUs = () => {
	return (
		<Fragment>
			<Head
				title="Assalamualaikum Wr. Wb."
				description="Tanpa mengurangi rasa hormat, kami mengundang bapak/ibu/sudara/i serta kerabat sekalian untuk menghadiri acara
				pernikahan kami"
			/>
			<div className='grid gap-5'>
				<div className="grid gap-2">
					<img src={women} alt="women" className="h-80" />
					<div className="pl-4">
						<h2 className="font-header">MW Putri Meilinia H. Purba, S.Kom</h2>
						<h5 className="text-left">Putri Ketiga dari Pasangan</h5>
						<h5>Bapak Kawaluddin Hasyim Purba & Ibu Evienda Ginting</h5>
					</div>
				</div>
				<h1 className="text-center font-header text-6xl text-primary/45">&</h1>
				<div className="grid gap-2 justify-items-end">
					<img src={men} alt="men" className="h-80" />
					<div className="pr-4">
						<h2 className="font-header text-right">Muhammad Fariz Dzuhreza, S.Kom</h2>
						<h5 className="text-right">Putra Tunggal dari Pasangan</h5>
						<h5 className="text-right">Bapak Edi Susanto & Ibu Retno Jumini</h5>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
export default AboutUs
