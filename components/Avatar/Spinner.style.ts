import styled, { keyframes } from "styled-components";

const spinnerSize = 40;

interface ISpinnerProps {
  loading: boolean;
}

interface ICircleProps {
  theme: {
    Loading_Background_Color: string;
  };
}

const spinnerAnimation = keyframes`{
  0% {
    stroke-dashoffset: 0
    transform: rotate(-90deg);
  } 25% {
    transform: rotate(0deg);
  } 50% {
    transform: rotate(0deg);
  }100% {
    transform: rotate(0deg);
    stroke-dashoffset: -125;
  }
}`;

export const Spinner = styled.svg<ISpinnerProps>`
  ${({ loading }) => (loading ? "display: block" : "display: none")};

  position: absolute;
  width: ${spinnerSize}px;
  height: ${spinnerSize}px;
  transform: scale(1.5);
  z-index: 99999;
`;

export const Circle = styled.circle<ICircleProps>`
  fill: transparent;
  transform: rotate(-90deg);
  stroke: ${({ theme }) => theme.Loading_Background_Color};
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: ${3.14 * spinnerSize};
  transform-origin: ${0.5 * spinnerSize}px ${0.5 * spinnerSize}px 0px;
  animation: ${spinnerAnimation} 1s linear infinite;
  z-index: 99;
`;
