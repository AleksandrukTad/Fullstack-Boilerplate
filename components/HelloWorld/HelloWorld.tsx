import React, { Component } from "react";

import { getActions, getState } from "../../store";

import Avatar from "../Avatar/Avatar";
import Popover from "../Popover/Popover";

import { Wrapper } from "./HelloWorld.style";

import { IAvatar } from "../../model/avatars";

interface IProps {
  IpropsText?: number;
}

interface IState {
  popoverOpen: boolean;
  active: IAvatar;
}

class HelloWorld extends Component<IProps, IState> {
  public static defaultProps = {
    propsText: "Hello World"
  };

  public avatars: IAvatar[] = getState().avatars.items;

  public state: any = {
    active: this.avatars[0],
    popoverOpen: false
  };

  public togglePopover = (popoverOpen: boolean): void => {
    this.setState({ popoverOpen });
  };

  public selectAvatar = (index: number) => {
    const active: IAvatar | null =
      this.avatars.find(avatar => avatar.index === index) || null;

    if (active) {
      getActions().avatars.updateActive(active);
      this.setState({
        active,
        popoverOpen: false
      });
    }
  };

  public render() {
    const restOfAvatars: IAvatar[] = this.avatars
      .filter(avatar => avatar.index !== this.state.active.index)
      .sort();

    const styles = getState().avatars.active.styles || {};

    return (
      <Wrapper>
        {/* active avatar */}
        <Avatar active={true} onEnter={this.togglePopover} styles={styles} />
        <Popover open={this.state.popoverOpen}>
          {restOfAvatars.map(avatar => (
            <Avatar
              active={false}
              key={avatar.index}
              index={avatar.index}
              styles={avatar.styles}
              selectAvatar={this.selectAvatar}
            />
          ))}
        </Popover>
      </Wrapper>
    );
  }
}

export default HelloWorld;
