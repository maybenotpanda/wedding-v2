// ** React Imports
import React, { useState, useRef } from 'react'

// ** Styles Imports
import { Container, Overlay, Label, Thumb } from './styles'

const SlideButton = ({ onSlide, disabled }) => {
	// ! hooks
	// * state
	const [position, setPosition] = useState(0)
	const [sliding, setSliding] = useState(false)
	const containerRef = useRef(null)

	// ! handle
	const handleStart = () => {
		if (disabled) return
		setSliding(true)
	}

	const handleMove = (e) => {
		if (!sliding || disabled) return
		const container = containerRef.current
		if (!container) return

		const rect = container.getBoundingClientRect()
		const clientX = e.touches ? e.touches[0].clientX : e.clientX
		let newPos = clientX - rect.left - 20

		newPos = Math.max(0, Math.min(newPos, rect.width - 40))
		setPosition(newPos)
	}

	const handleEnd = () => {
		if (!sliding || disabled) return
		const container = containerRef.current
		if (!container) return

		const rect = container.getBoundingClientRect()
		const threshold = rect.width * 0.7

		if (position >= threshold - 40) {
			setPosition(rect.width - 40)
			onSlide && onSlide()
			setTimeout(() => setPosition(0), 500)
		} else {
			setPosition(0)
		}

		setSliding(false)
	}

	const progress = containerRef.current ? position / (containerRef.current.offsetWidth - 40) : 0

	return (
		<Container
			ref={containerRef}
			className={`bg-primary relative w-60 border-2 rounded-full h-12 ${disabled ? 'opacity-50' : ''}`}
			onMouseMove={handleMove}
			onMouseUp={handleEnd}
			onMouseLeave={handleEnd}
			onTouchMove={handleMove}
			onTouchEnd={handleEnd}>
			<Overlay opacity={1 - progress} blur={progress * 6} />
			<Label className='text-white' opacity={1 - progress}>{disabled ? 'Not Available' : 'Slide for invitation'}</Label>
			<Thumb
				className="bg-secondary"
				// sliding={sliding}
				$sliding={sliding}
				position={position}
				onMouseDown={handleStart}
				onTouchStart={handleStart}
			/>
		</Container>
	)
}

export default SlideButton
