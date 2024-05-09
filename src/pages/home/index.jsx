import Template from './template'

const type = process.env.REACT_APP_ENV
const port = process.env.PORT
const HomePage = () => {
	return <Template type={type} port={port} />
}

export default HomePage
