// ** React Imports
import React, { useCallback } from 'react'

// ** Antd Imports
import { message } from 'antd'

// ** Assets Imports
import chip from 'assets/images/chip-atm.png'
import background from 'assets/images/bg-account.png'

const CardGift = (props) => {
	const handleCopy = useCallback((accountNumber) => {
		navigator.clipboard
			.writeText(accountNumber)
			.then(() => {
				message.success('Nomor rekening berhasil disalin ke clipboard')
			})
			.catch(() => {
				message.error('Gagal menyalin nomor rekening')
			})
	}, [])

	return (
		<div className="grid gap-4 px-4">
			{props.data.map((data, index) => (
				<div
					className="p-4 rounded-3xl shadow-sm w-full relative bg-cover bg-center"
					key={index}
					data-aos="fade-up"
					data-aos-duration="1500"
					style={{ backgroundImage: `url(${background})` }}>
					{data.type === 'bank' ? (
						<>
							<img
								className="w-44 opacity-25 absolute bottom-4 left-4"
								src={`assets/accounts/${data.account}.png`}
								alt="The ridged surface of the moon"
							/>
							<div className="grid relative">
								<img alt="testing" src={`assets/accounts/${data.account}.png`} className="w-24 my-2 justify-self-end" />
								<img src={chip} alt="chip" className="w-8" />
								<span></span>
								<h6 className="font-bold">{data.accountNumber}</h6>
								<h7>{data.accountName}</h7>
								<div className="flex justify-end">
									<button
										className="bg-primary text-white py-1 px-2 mt-4 rounded-lg hover:bg-transparent hover:text-selected w-fit"
										onClick={() => handleCopy('08123')}>
										Copy
									</button>
								</div>
							</div>
						</>
					) : (
						<div className="text-center">
							<h6>Nama Penerima : {data.accountName}</h6>
							<h6>Nomor : {data.phoneNumber}</h6>
							<h6>Alamat : {data.address}</h6>
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default CardGift
