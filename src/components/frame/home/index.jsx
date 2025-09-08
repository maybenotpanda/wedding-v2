// ** React Imports
import React, { Fragment } from 'react'

// ** Fragments Imports
import GiftFragments from 'components/fragments/gift'
import CountdownTimer from 'components/fragments/countdown'
import MainEvent from 'components/fragments/main-events'
import AboutUs from 'components/fragments/about-us'
import ThankYouFragments from 'components/fragments/thank-you'
import OurStore from 'components/fragments/our-store'
import Form from 'components/fragments/form'

// ** Assets Imports
import background from 'assets/images/background.jpg'

const HomeFrame = () => {
	return (
		<Fragment>
			<img
				className="w-3/5 h-screen object-cover fixed left-0 top-0 z-10 hidden lg:block bg-top"
				src={background}
				alt="Background"
			/>
			<div className="lg:w-2/5 w-full overflow-y-scroll ml-auto z-20 bg-background">
				<div className="h-screen"></div>
				<AboutUs />
				<CountdownTimer />
				<OurStore />
				<MainEvent data={event} />
				<div className='grid gap-3 bg-background py-2'>
					<GiftFragments data={bank} />
					<Form />
				</div>
				<ThankYouFragments />
			</div>
		</Fragment>
	)
}

export default HomeFrame

const event = [
	{
		name: 'Akad Nikah',
		date: 'Jumat, 03 Oktober 2025',
		time: '07:00',
		location: 'Masjid Al-Jihad',
		dressCode: 'Putih',
		maps: 'https://maps.app.goo.gl/FsAESiQC7XRW1Whe7'
	},
	{
		name: 'Resepsi',
		date: 'Sabtu, 04 Oktober 2025',
		time: '10:00',
		location: 'Gedung Gelanggang USU',
		dressCode: 'Cream atau Batik',
		maps: 'https://maps.app.goo.gl/WrvbPF5qC925nWaY9'
	}
	// {
	// 	name: 'Akad Nikah',
	// 	date: 'Minggu, 05 Oktober 2025',
	// 	time: '10:00',
	// 	location: 'Rumah Orang Tua Mempelai Pria',
	// 	maps: ''
	// }
]

const bank = [
	{
		type: 'bank',
		account: 'bsi',
		accountNumber: '7249818466',
		accountName: 'MW Putri Meilinia H. Purba'
	},
	{
		type: 'home',
		address: 'Jl. Belakang Pasar Baru I No.(Lupa), Joyfull Kost, Pasar Baru, Jakarta Pusat',
		accountName: 'MW Putri',
		phoneNumber: '081362223600'
	}
]
