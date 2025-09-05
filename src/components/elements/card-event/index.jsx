import React from 'react'

const CardEvent = (props) => {
	return props.data.map((data, index) => (
		<div key={index} className="p-4 bg-background rounded-3xl shadow-sm w-full relative bg-slate-50 text-center">
			<h5>{data.name}</h5>
			<h5>{data.date}</h5>
			<h5>{data.time}</h5>
			<h5>Lokasi :{data.location}</h5>
			{data.maps ? (
				<a href={data.maps} target="_blank" rel="noopener noreferrer">
					Lihat Lokasi
				</a>
			) : (
				''
			)}
		</div>
	))
}

export default CardEvent
