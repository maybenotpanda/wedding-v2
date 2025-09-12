import React from 'react'

const CardEvent = (props) => {
	return props.data.map((data, index) => (
		<div key={index} className="mx-4 shadow-sm relative bg-white grid gap-2 justify-items-center py-2">
			<h5>{data.name}</h5>
			<h5>Tanggal : {data.date}</h5>
			<h5>Waktu : {data.time}</h5>
			<h5>Lokasi : {data.location}</h5>
			{data.maps ? (
				<a className='bg-primary text-white py-2 px-4 w-fit' href={data.maps} target="_blank" rel="noopener noreferrer">
					Lihat Lokasi
				</a>
			) : (
				<h5 className='text-red-300'>Tidak Tersedia untuk saat ini</h5>
			)}
		</div>
	))
}

export default CardEvent
