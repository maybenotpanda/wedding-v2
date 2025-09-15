// ** React Imports
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Snowfall from 'react-snowfall'

// ** Store Imports
import { dataDetailGuest, loadingDetailGuest } from 'config/store/modules/guest/selector'
import { createMessage, listMessages } from 'config/store/modules/messages/actions'

// ** Fragments Imports
import Cover from 'components/fragments/cover'
import GiftFragments from 'components/fragments/gift'
import CountdownTimer from 'components/fragments/countdown'
import MainEvent from 'components/fragments/main-events'
import AboutUs from 'components/fragments/about-us'
import ThankYouFragments from 'components/fragments/thank-you'
import OurStore from 'components/fragments/our-store'
import Form from 'components/fragments/form'

// ** Assets Imports
import background from 'assets/images/background.jpg'
import bgHome from 'assets/images/backgorud-home.jpg'

const HomeFrame = () => {
	const [isCover, setIsCover] = useState(true)
	const [closed, setClosed] = useState(false)
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(8)
	const dispatch = useDispatch()

	const dataDetail = useSelector(dataDetailGuest)
	const loadData = useSelector(loadingDetailGuest)

	useEffect(() => {
		dispatch(listMessages({ page: page - 1, limit }));
	}, [dispatch, page, limit])

	return loadData ? (
		'Loading...'
	) : (
		<Fragment>
			<img
				className="w-3/5 h-screen object-cover fixed left-0 top-0 z-10 hidden lg:block bg-top"
				src={background}
				alt="Background"
			/>
			<div className="relative">
				<div className="fixed inset-0 pointer-events-none z-10">
					{/*<Snowfall
						snowflakeCount={200}
						color="#e8e8e8"
						speed={[0.5, 1.5]}
						wind={[0.5, 3]}
					/>*/}
				</div>
				<Cover name={dataDetail.name} isCover={isCover} setIsCover={setIsCover} />
				<div className="lg:w-2/5 w-full overflow-y-scroll ml-auto z-20 bg-background">
					<div
						className="h-screen bg-fixed bg-center bg-cover grid justify-items-center content-center"
						style={{ backgroundImage: `url(${bgHome})` }}>
						<div className="window relative">
							<div className={`top ${isCover ? 'hidden' : 'top '} ${closed ? 'closed' : ''}`} onClick={() => setClosed(!closed)}></div>
							<div className="glass">
								<div className="sky">
									<div className="cloud" />
									<div className="cloud" />
									<div className="cloud" />
									<div className="cloud" />
									<div className="cloud" />
									<div className="cloud" />
									<div className="window-text">
										<h1 className="text-black text-center font-header">MW</h1>
										<h4 className="text-black text-center font-header">&</h4>
										<h1 className="text-black text-center font-header">Reza</h1>
									</div>
									<div className="nyan-cat" />
								</div>
							</div>
						</div>
					</div>
					<AboutUs />
					<CountdownTimer type={dataDetail.type} />
					<MainEvent data={event} type={dataDetail.type} />
					<OurStore />
					<div className="grid gap-3 bg-primary">
						<GiftFragments data={bank} />
						<Form page={page} limit={limit} setPage={setPage} setLimit={setLimit} data={(e) => dispatch(createMessage({ ...e, guest_id: dataDetail.uuid }))} />
					</div>
					<ThankYouFragments />
				</div>
			</div>
		</Fragment>
	)
}

export default HomeFrame

const event = [
	{
		day: 'Jumat',
		dayNumber: '03',
		monthyear: "Oktober 2025",
		name: 'Akad Nikah',
		time: '07:00',
		location: 'Masjid Al-Jihad',
		dressCode: 'Putih',
		maps: 'https://maps.app.goo.gl/FsAESiQC7XRW1Whe7'
	},
	{
		day: 'Sabtu',
		dayNumber: '04',
		monthyear: "Oktober 2025",
		name: 'Prosesi Resepsi',
		time: '10:00',
		location: 'Gedung Gelanggang USU',
		dressCode: 'Cream atau Batik',
		maps: 'https://maps.app.goo.gl/WrvbPF5qC925nWaY9'
	},
	{
		day: 'Minggu',
		dayNumber: '06',
		monthyear: "Oktober 2025",
		name: 'Unduh Mantu',
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
		address: 'Jl. Belakang Pasar Baru I No.23, Joyfull Kost, Pasar Baru, Jakarta Pusat',
		accountName: 'MW Putri',
		phoneNumber: '081362223600'
	}
]
