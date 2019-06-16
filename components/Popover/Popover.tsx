import React from "react";

import { Wrapper } from "./Popover.style";

interface IProps extends React.Props<any> {
  open: boolean;
}

const Popover: React.FunctionComponent<IProps> = ({ open, children }) => {
  return <Wrapper open={open}> {children} </Wrapper>;
};

export default Popover;
