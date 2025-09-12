// ** React Imports
import React, { Fragment, useCallback } from 'react'

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
		<div className="grid gap-4">
			{props.data.map((data, index) => (
				<div
					className="p-4 rounded-2xl shadow-sm w-full relative bg-cover bg-center bg-[#F6F6F6]"
					key={index}
					data-aos="zoom-in-down"
					data-aos-duration="800"
					style={{
						backgroundImage: data.type === "home" ? "none" : `url(${background})`,
					}}
				>
					{data.type === 'bank' ? (
						<Fragment>
							<img
								className="w-44 opacity-25 absolute bottom-4 left-4"
								src={`assets/accounts/${data.account}.png`}
								alt="The ridged surface of the moon"
							/>
							<div className="grid relative">
								<img alt="testing" src={`assets/accounts/${data.account}.png`} className="w-24 my-2 justify-self-end" />
								<img src={chip} alt="chip" className="w-8" />
								<span></span>
								<h5 className="font-bold">{data.accountNumber}</h5>
								<h6>{data.accountName}</h6>
								<div className="flex justify-end">
									<button
										className="bg-primary w-fit py-1 px-2 mt-3 text-white rounded-md  text-sm"
										onClick={() => handleCopy(data.accountNumber)}>
										Copy
									</button>
								</div>
							</div>
						</Fragment>
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
