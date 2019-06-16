import React from "react";
import styled from "styled-components";

interface IButtonProps {
  backgroundColor: string;
  color: string;
  className: string;
  height: string;
  padding: string;
  width: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};
  onMouseEnter: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};
  onMouseLeave: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};
}

export default styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  border: 0px solid transparent;
  border-radius: 5px;
  ${({ color }) => color && `color: ${color}`};
  cursor: pointer;
  height: ${({ height }) => height};
  line-height: 1.4;
  text-transform: uppercase;
  padding: ${({ padding }) => padding};
  user-select: none;
  width: ${({ width }) => width};
`;
