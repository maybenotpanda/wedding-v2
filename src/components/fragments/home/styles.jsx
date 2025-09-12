// ** Styled Imports
import styled, { keyframes } from "styled-components";

const leftToRight = keyframes`
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
`;

export const Cloud = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  background-color: white;
  border-radius: 40px;
  animation: ${leftToRight} 8s linear infinite;

  &::before,
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  }

  &::before {
    top: -20px;
    left: 20px;
  }

  &::after {
    top: -10px;
    left: 50px;
  }

  &:nth-child(1) {
    animation-duration: 8s;
  }
  &:nth-child(2) {
    top: 20%;
    animation-delay: 0.2s;
    animation-duration: 6s;
  }
  &:nth-child(3) {
    top: 40%;
    animation-duration: 4s;
  }
  &:nth-child(4) {
    top: 60%;
    animation-duration: 6s;
  }
  &:nth-child(5) {
    top: 20%;
    transform: scale(3);
    animation-duration: 4s;
    animation-delay: 2s;
  }
  &:nth-child(6) {
    top: 20%;
    transform: scale(2);
    animation-duration: 4s;
  }
`;
