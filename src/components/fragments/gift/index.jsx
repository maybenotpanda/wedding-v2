// ** React Imports
import React, { Fragment, useState } from 'react'

// ** Elements Imports
import CardGift from 'components/elements/card-gift'
import Head from 'components/elements/head'

const GiftFragments = (props) => {
	const [showGift, setShowGift] = useState(false)
	return (
		<Fragment>
			<Head
				title="Wedding Gift"
				description="Bagi Bapak/Ibu/Sudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual accout atau e-wallet di bawah
				ini:"
			/>
			<button className="bg-primary py-2 w-full px-4" onClick={() => setShowGift(!showGift)}>
				{showGift ? 'Sembunyikan Gift' : 'Klik Disini'}
			</button>
			{showGift && <CardGift data={props.data} />}
		</Fragment>
	)
}

export default GiftFragments
