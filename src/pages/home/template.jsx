import Descriptions from '../../components/elements/descriptions'

const Template = ({ type, port }) => {
	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<div className="grid gap-4 mb-6">
				<h4 className="text-center">Hello World</h4>
				<div className="grid gap-2">
					<Descriptions label="Type" value={type} />
					<Descriptions label="Port" value={port} />
				</div>
			</div>
		</div>
	)
}

export default Template
