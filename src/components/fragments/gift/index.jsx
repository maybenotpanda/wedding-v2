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
		<div className="bg-primary py-6">
			<Head
				title="Wedding Gift"
				description="Bagi Bapak/Ibu/Sudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual accout atau e-wallet di bawah
				ini:"
				color="white"
			/>
			<button className="bg-primary py-2 w-full px-4" onClick={() => setShowGift(!showGift)}>
				{showGift ? 'Sembunyikan Gift' : 'Klik Disini'}
			</button>
			{showGift && <CardGift data={props.data} />}
		</Fragment>
	)
}

export default GiftFragments
