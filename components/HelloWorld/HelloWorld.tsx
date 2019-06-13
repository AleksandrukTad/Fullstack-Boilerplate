import React, { Component } from "react";

import { Wrapper } from './HelloWorld.style';

interface Props {
  propsText?: number,
}

interface State {

}

class HelloWorld extends Component<Props, State> {
  static defaultProps = {
    propsText: 'Hello World',
  }

  public render() {
    return (
      <Wrapper>
        {this.props.propsText}
      </Wrapper>
    )
  }
}

export default HelloWorld;