// ** React Imports
import React from 'react'

// ** Icons Imports
import { BsFillGeoAltFill, BsClockFill } from 'react-icons/bs'

// ** Assets Imports
import background from 'assets/images/bg-event.png'

const CardEvent = (props) => {
	const { type, data } = props

	const rules = {
		akad: ['Keluarga', 'VIP', 'Teman'],
		resepsi: ['Keluarga', 'VIP', 'Teman', 'Basic'],
		unduhmantu: ['Keluarga', 'VIP']
	}

	const filteredData = (() => {
		if (!type) return data

		const guestType = type.toLowerCase()

		return data.filter((item) => {
			const itemKey = item.name.toLowerCase().includes('akad')
				? 'akad'
				: item.name.toLowerCase().includes('resepsi')
				? 'resepsi'
				: item.name.toLowerCase().includes('unduh')
				? 'unduhmantu'
				: null

			if (!itemKey) return false

			return rules[itemKey].some((r) => r.toLowerCase() === guestType)
		})
	})()

	return (
		<div className="space-y-6">
			{filteredData.length > 0 ? (
				filteredData.map((item, index) => (
					<div
						className="mx-4 rounded-3xl shadow-md bg-secondary overflow-hidden flex"
						style={{
							backgroundImage: `url(${background})`
						}}>
						{/* Header samping */}
						<div className="bg-background px-2 flex items-center justify-center w-12">
							<h5 className="font-bold [writing-mode:vertical-rl] rotate-180">{item.name}</h5>
						</div>

						{/* Isi card */}
						<div className="flex-1 p-4 grid gap-2">
							<div className="flex gap-2 justify-center items-center">
								<h1 className="text-6xl font-semibold">{item.dayNumber}</h1>
								<div className="grid gap-1">
									<h6 className="font-bold">{item.day},</h6>
									<h6 className="font-bold">{item.monthyear}</h6>
								</div>
							</div>

							<div className="flex gap-1 items-center">
								<BsFillGeoAltFill className="w-5 h-5 text-primary" />
								<h5>{item.time} WIB</h5>
							</div>

							<div className="flex gap-1 items-center">
								<BsClockFill className="w-5 h-5 text-primary" />
								<h5>{item.location}</h5>
							</div>

							{item.maps ? (
								<a
									className="bg-primary text-white py-2 px-4 w-fit rounded-lg"
									href={item.maps}
									target="_blank"
									rel="noopener noreferrer">
									Lihat Lokasi
								</a>
							) : (
								<h5 className="text-red-400 italic">Lokasi belum tersedia</h5>
							)}
						</div>
					</div>
				))
			) : (
				<p className="text-center text-gray-500">Tidak ada acara untuk tipe ini</p>
			)}
		</div>
	)
}

export default CardEvent
