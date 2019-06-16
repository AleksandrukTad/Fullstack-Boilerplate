import styled, { css, keyframes } from "styled-components";

const arrowHeight = 10;

const visibilityAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

interface IWrapperProps {
  open: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: none;
  flex-flow: column;
  align-items: center;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.Popover};
  top: calc(100% + ${arrowHeight}px);
  position: absolute;
  width: 100px;
  border-radius: 5px;
  z-index: 1;

  ${({ open }) =>
    open &&
    css`
      display: flex;
      animation: ${visibilityAnimation} 0.25s ease;
    `};

  &:before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    /* -5 to hide rounded sides and make sure that it does nto touch the avatar*/
    top: -${arrowHeight - 5}px;
    left: 50%;
    background-color: ${({ theme }) => theme.Popover};
    border-radius: 5px;
    /* arrow is square div with the same color as bg, just rotated and rounded */
    transform: translate3d(-50%, 0, 0) rotate(45deg);
    /* hidden arrow below wrapper */
    z-index: -1;
  }
`;
