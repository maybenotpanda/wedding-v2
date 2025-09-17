// ** React Imports
import React from 'react'

// ** Styles Imports
import { LoaderWrapper, Heart, LoaderText } from './styles'

const LoveLoader = () => {
	return (
		<LoaderWrapper className="flex h-screen">
			<Heart className="bg-primary relative w-20 h-20" />
			<LoaderText className="mt-12 text-primary font-description">Preparing your flight...</LoaderText>
		</LoaderWrapper>
	)
}

export default LoveLoader
