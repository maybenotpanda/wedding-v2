// ** React Imports
import { getDayOrWeekDiff } from 'config/utils/date'
import React from 'react'

const Message = ({ data }) => {

	return (
		<div className="grid gap-2">
			{data ? data.map((item, index) => (
				<div key={index} className='w-full'>
					<h5 className="font-semibold text-primary">{item.name}</h5>
					<p className="text-black truncate w-full">{item.message}</p>
					<span className="text-[#545454]">{getDayOrWeekDiff(item.created_at)}</span>
				</div>
			)) : ""}
		</div>
	)
}

export default Message
