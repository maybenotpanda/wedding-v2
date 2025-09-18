// ** React Imports
import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// ** Antd
import { message } from 'antd'

// ** Store Imports
import { loadingDetailGuest, dataDetailGuest, errorDetailGuest } from 'config/store/modules/guest/selector'
import { dataCreateMessage, errorCreateMessage, loadingCreateMessage } from 'config/store/modules/messages/selector'

// ** Fragment Imports
import Loading from 'components/fragments/loading'

// ** Assets Imports
import bank from 'assets/data/account-bank.json'
import schedule from 'assets/data/schedule.json'
import background from 'assets/images/background.jpg'

// ** Fragments Imports with lazy
const Cover = lazy(() => import('components/fragments/cover'))
const Welcome = lazy(() => import('components/fragments/welcome'))
const AboutUs = lazy(() => import('components/fragments/about-us'))
const Countdown = lazy(() => import('components/fragments/countdown'))
const Form = lazy(() => import('components/fragments/form'))
const Gift = lazy(() => import('components/fragments/gift'))
const MainEvent = lazy(() => import('components/fragments/main-events'))
const OurStore = lazy(() => import('components/fragments/our-store'))
const ThankYou = lazy(() => import('components/fragments/thank-you'))

const HomeFrame = (props) => {
	// ! selector
	const loadDetail = useSelector(loadingDetailGuest)
	const dataDetail = useSelector(dataDetailGuest)
	const errDetail = useSelector(errorDetailGuest)
	const loadCreate = useSelector(loadingCreateMessage)
	const errCreate = useSelector(errorCreateMessage)
	const succCreate = useSelector(dataCreateMessage)

	// ! props
	const { data, page, setPage, limit, setLimit } = props

	// ! hooks
	// * state
	const [isCover, setIsCover] = useState(true)
	const [closed, setClosed] = useState(false)

	// ! effects
	useEffect(() => {
		let loadingMessage = null

		if (loadCreate) {
			loadingMessage = message.loading("Tunggu Sebentar...", 0)
		}

		if (succCreate && succCreate.data) {
			message.success("Pesan berhasil dikirim")
		}

		return () => {
			if (loadingMessage) {
				loadingMessage()
			}
		}
	}, [loadCreate, succCreate, errCreate])


	return loadDetail ? (
		<Loading />
	) : errDetail ? (
		'Something is going on in the Universe...'
	) : (
		<Fragment>
			<img
				className="w-3/5 h-screen object-cover fixed left-0 top-0 z-10 hidden lg:block bg-top"
				src={background}
				alt="Background"
			/>
			<div className="relative">
				<Suspense fallback={<Loading />}>
					<Cover name={dataDetail.name} isCover={isCover} setIsCover={setIsCover} />
					<div className="lg:w-2/5 w-full overflow-y-hidden ml-auto z-20 bg-background">
						<Welcome closed={closed} setClosed={setClosed} isCover={isCover} />
						<AboutUs />
						<div className='bg-primary'>
							<Countdown type={dataDetail.type} />
							<div className="border-t-2 border-dashed border-secondary mx-4" />
						</div>
						<MainEvent data={schedule} type={dataDetail.type} />
						<OurStore />
						<div className="grid gap-3 bg-primary">
							<Gift data={bank} />
							<Form
								page={page}
								limit={limit}
								setPage={setPage}
								setLimit={setLimit}
								data={(e) => data({ ...e, guest_id: dataDetail.uuid })}
							/>
						</div>
						<ThankYou />
					</div>
				</Suspense>
			</div>
		</Fragment>
	)
}

export default HomeFrame
