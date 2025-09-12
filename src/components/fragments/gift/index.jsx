// ** React Imports
import React, { useState } from 'react'

// ** Framer
import { motion, AnimatePresence } from 'framer-motion'

// ** Elements Imports
import CardGift from 'components/elements/card-gift'
import Head from 'components/elements/head'

const GiftFragments = (props) => {
	// ! hooks
	// * state
	const [showGift, setShowGift] = useState(false)

	return (
		<div className="py-6 grid gap-2">
			<Head
				title="Wedding Gift"
				description="Bagi Bapak/Ibu/Sudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual accout atau e-wallet di bawah
				ini:"
				color="white"
			/>
			<div className="grid px-4 gap-4 justify-items-center pt-4">
				<button
					className="bg-white py-2 text-center text-primary rounded-md w-44"
					data-aos="fade-up"
					data-aos-duration="600"
					onClick={() => setShowGift(!showGift)}>
					{showGift ? 'Sembunyikan Gift' : 'Klik Disini'}
				</button>
				<AnimatePresence>
					{showGift && (
						<motion.div
							key="gift"
							initial={{ opacity: 0, y: -20, height: 0 }}
							animate={{ opacity: 1, y: 0, height: 'auto' }}
							exit={{ opacity: 0, y: -20, height: 0 }}
							transition={{ duration: 0.4, ease: 'easeInOut' }}
							className="overflow-hidden w-full">
							<CardGift data={props.data} />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default GiftFragments
