// ** React Imports
import React, { useState } from 'react'

// ** Elements Imports
import CardGift from 'components/elements/card-gift'

const GiftFragments = (props) => {
	const [showGift, setShowGift] = useState(false)
	return (
		<div>
			<h4 className="text-center">Wedding Gift</h4>
			<h6 className="text-center">
				Bagi Bapak/Ibu/Sudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual accout atau e-wallet di bawah
				ini:
			</h6>
			<div className="text-center mb-3">
				<button className="btn btn-outline-primary" onClick={() => setShowGift(!showGift)}>
					{showGift ? 'Sembunyikan Gift' : 'Tampilkan Gift'}
				</button>
			</div>
			{showGift && <CardGift data={props.data} />}
		</div>
	)
}

export default GiftFragments
