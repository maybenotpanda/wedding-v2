import { Input } from 'antd'
import Head from 'components/elements/head'
import Message from 'components/elements/message'
import React from 'react'

const { TextArea } = Input

const Form = () => {
	return (
		<div className="h-screen grid gap-3 content-start justify-items-center">
			<Head title="Wedding Wishes" description="Berikan ucapan harapan dan do’a kepada kedua mempelai" />
			<div className="px-4 w-full">
				<div className="bg-secondary rounded-3xl shadow-sm relative px-4 w-full grid gap-4 py-2">
					<Input placeholder="Nama" />
					<TextArea placeholder="Ucapan" showCount maxLength={300} autoSize />
					<button className="bg-background rounded-md py-1 mt-4">Kirim</button>
					<Message />
				</div>
			</div>
		</div>
	)
}

export default Form
