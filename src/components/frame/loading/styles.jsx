// ** Styled Imports
import styled, { keyframes } from "styled-components"

const heartbeat = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {
    transform: scale(1) rotate(-45deg);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: scale(1.15) rotate(-45deg);
  }
`

const pulseText = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`

export const LoaderWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heart = styled.div`
  transform: rotate(-45deg);
  animation: ${heartbeat} 3s infinite ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    background: #0082A6;
    border-radius: 50%;
  }

  &::before {
    top: -40px;
    left: 0;
  }

  &::after {
    left: 40px;
    top: 0;
  }
`

// Teks loading
export const LoaderText = styled.h5`
  animation: ${pulseText} 3s infinite ease-in-out;
`