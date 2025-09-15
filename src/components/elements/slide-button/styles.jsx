// ** Styled Imports
import styled from 'styled-components'

export const Container = styled.div`
	// width: 16rem; /* 64 */
	height: 3rem; /* 12 */
	border-radius: 9999px;
	overflow: hidden;
	user-select: none;
`

export const Label = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 0.875rem;
	pointer-events: none;
	z-index: 1;
	opacity: ${(props) => props.opacity}; /* <- ikut progress */
	transition: opacity 0.2s ease;
`

export const Overlay = styled.div`
	position: absolute;
	inset: 0;
	backdrop-filter: blur(${(props) => props.blur}px);
	opacity: ${(props) => props.opacity};
	transition: opacity 0.2s ease, backdrop-filter 0.2s ease;
	z-index: 0;
`

export const Thumb = styled.div`
	position: absolute;
	top: 2.25px;
	left: 2px;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 9999px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	transition: transform ${(props) => (props.sliding ? '0s' : '0.3s ease')};
	transform: translateX(${(props) => props.position}px);
	z-index: 2;
`
