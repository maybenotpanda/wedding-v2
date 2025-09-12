// ** React Imports
import React from 'react'

// ** Antd Imports
import { Input, Form } from 'antd'

// ** Elements Imports
import Head from 'components/elements/head'
import Message from 'components/elements/message'
import styled from 'styled-components'

const { TextArea } = Input
const Wishes = (props) => {
	const { data } = props
	const handleSubmit = (e) => {
		const req = { ...e }
		data(req)
	}
	return (
		<div className="h-screen grid gap-3 content-start justify-items-center">
			<Head title="Wishes" description="Berikan ucapan harapan dan do’a kepada kedua mempelai" color="white" />
			<div className="px-4 w-full">
				<div className="bg-secondary rounded-3xl shadow-sm relative px-4 w-full grid gap-4 py-2">
					<Form layout="vertical" onFinish={handleSubmit}>
						<Form.Item
							name="name"
							label="Nama"
							rules={[
								{
									required: true,
									message: 'Mohon untuk mengisi nama'
								}
							]}>
							<Input placeholder="Nama" />
						</Form.Item>
						<Form.Item
							name="message"
							label="Pesan"
							rules={[
								{
									required: true,
									message: 'Mohon untuk mengisi isi pesan'
								}
							]}>
							<TextArea placeholder="Ucapan" showCount maxLength={300} autoSize />
						</Form.Item>
						<FormGroup>
							<button htmlType="submit" className="bg-white rounded-md py-2 text-center text-primary w-full">
								Kirim
							</button>
						</FormGroup>
					</Form>
					<div className="max-h-96 overflow-y-auto pr-2 scrollbar-hide">
						<Message />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Wishes

const FormGroup = styled(Form.Item)`
	margin-bottom: 8px !important;
	margin-top: 8px !important;
`
