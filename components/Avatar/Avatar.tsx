import React, { Component } from "react";

import Spinner from "./Spinner";

import Button from "../ui/Button/Button";

import { Circle, Text } from "./Avatar.style";

interface IProps extends React.Props<any> {
  active?: false | true;
  index?: number;
  styles: {
    borderColor: string;
    overlay?: string;
  };
  onEnter(bool: boolean): void;
  selectAvatar(index: number | undefined): void;
}

interface IState {
  extended: boolean;
  loading: boolean;
}

class Avatar extends Component<IProps, IState> {
  public static defaultProps = {
    active: false,
    index: 0,
    onEnter() {
      return null;
    },
    selectAvatar() {
      return null;
    },
    styles: {
      overlay: ""
    }
  };

  public state = {
    extended: false,
    loading: false
  };

  public selectAvatar = async () => {
    if (this.props.active) {
      return null;
    }

    await this.setState({ loading: true });

    setTimeout(async () => {
      await this.setState({ loading: false, extended: false });

      this.props.selectAvatar(this.props.index);
    }, 1000);
  };

  public onEnter = (extended: boolean): any => {
    this.setState({ extended });
  };

  public render() {
    const { onEnter, active, styles } = this.props;

    return (
      <Button
        onClick={this.selectAvatar}
        onMouseEnter={() => (active ? onEnter(true) : this.onEnter(true))}
        onMouseLeave={() => (active ? null : this.onEnter(false))}
      >
        <Spinner loading={this.state.loading} />

        <Circle
          active={!!active}
          // Avatar extends when you are hovering and when always when its loading
          extended={this.state.loading ? true : this.state.extended}
          loading={this.state.loading}
          {...styles}
        >
          <Text color="green"> T </Text>
          <Text color="blue"> A </Text>
        </Circle>
      </Button>
    );
  }
}

export default Avatar;
