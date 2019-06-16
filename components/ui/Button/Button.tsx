import React, { memo } from "react";

import StyledButton from "./Button.style";

interface IButtonProps extends React.Props<any> {
  backgroundColor?: string;
  color?: string;
  className?: string;
  height?: string;
  padding?: string;
  width?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};
  onMouseEnter: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};
  onMouseLeave: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};
}

const defaultProps = {
  backgroundColor: "",
  className: "",
  color: "",
  height: "",
  padding: "0.5rem",
  width: ""
};

const Button: React.FunctionComponent<IButtonProps> = props => {
  const buttonClick = {
    backgroundColor: props.backgroundColor || "",
    className: props.className || "",
    color: props.color || "",
    height: props.height || "",
    padding: props.padding || "",
    width: props.width || ""
  };

  return (
    <StyledButton
      {...buttonClick}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;

export default memo(Button);
