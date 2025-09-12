// ** React Imports
import { getDayOrWeekDiff } from 'config/utils/date'
import React from 'react'

const Message = () => {
	const data = [
		{
			name: 'Keple',
			message: 'testing',
			date: '2025-09-12T13:05:18.000000Z'
		},
		{
			name: 'Keple',
			message:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			date: '2025-09-10T18:05:18.000000Z'
		},
		{
			name: 'Nadilla',
			message:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			date: '2025-09-11T18:05:18.000000Z'
		},
		{
			name: 'Keple',
			message:
				'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
			date: '2025-08-12T18:05:18.000000Z'
		}
	]
	return (
		<div className="grid gap-2">
			{data.map((item, index) => (
				<div key={index}>
					<h5 className="font-semibold text-primary">{item.name}</h5>
					<p className="text-black">{item.message}</p>
					<span className="text-[#545454]">{getDayOrWeekDiff(item.date)}</span>
				</div>
			))}
		</div>
	)
}

export default Message
