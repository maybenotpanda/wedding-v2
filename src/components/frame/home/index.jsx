// ** React Imports
import React from 'react'

// ** Fragments Imports
import GiftFragments from 'components/fragments/gift'
import CountdownTimer from 'components/fragments/countdown'
import MainEvent from 'components/fragments/main-events'
import AboutUs from 'components/fragments/about-us'
import ThankYouFragments from 'components/fragments/thank-you'

const HomeFrame = () => {
	return (
		<div className="px-4">
			<AboutUs />
			<CountdownTimer />
			<MainEvent data={event} />
			<GiftFragments data={bank} />
			<ThankYouFragments />
		</div>
	)
}

export default HomeFrame

const event = [
	{
		name: 'Akad Nikah',
		date: 'Jumat, 03 Oktober 2025',
		time: '07:00',
		location: 'Masjid Al-Jihad',
		maps: 'https://maps.app.goo.gl/FsAESiQC7XRW1Whe7'
	},
	{
		name: 'Resepsi',
		date: 'Sabtu, 04 Oktober 2025',
		time: '10:00',
		location: 'Gedung Gelanggang USU',
		maps: 'https://maps.app.goo.gl/WrvbPF5qC925nWaY9'
	},
	{
		name: 'Akad Nikah',
		date: 'Minggu, 05 Oktober 2025',
		time: '10:00',
		location: 'Rumah Orang Tua Mempelai Pria',
		maps: ''
	}
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
