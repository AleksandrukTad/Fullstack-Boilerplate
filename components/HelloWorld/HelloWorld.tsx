import React, { Component } from "react";

interface IProps {
  // props types go here
  testProps: string;
}

interface IState {
  // state type goes here
  testState: string;
}

class HelloWorld extends Component<IProps, IState> {
  public render() {
    return <div> Typescript, Styled components and Jest Boilerplate! </div>;
  }
}

export default HelloWorld;
