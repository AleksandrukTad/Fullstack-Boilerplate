import { Action, action } from "easy-peasy";

export interface IAvatar {
  index: number;
  name: string;
  styles: {
    borderColor: string;
    overlay?: string;
  };
}

export interface IAvatarsModel {
  active: IAvatar;
  items: IAvatar[];
  updateActive: Action<IAvatarsModel, IAvatar>;
}

const avatarsItems: IAvatar[] = [
  {
    index: 0,
    name: "Available",
    styles: {
      borderColor: "rgb(46, 204, 113)"
    }
  },
  {
    index: 1,
    name: "Not Read",
    styles: {
      borderColor: "rgb(251, 197, 49)",
      overlay: "rgb(251, 197, 49)"
    }
  },
  {
    index: 2,
    name: "Unavailable",
    styles: {
      borderColor: "rgb(194, 54, 22)",
      overlay: "rgb(0, 0, 0)"
    }
  }
];

const avatars: IAvatarsModel = {
  active: avatarsItems[0],
  items: avatarsItems,
  updateActive: action((state, newActive: IAvatar) => {
    state.active = newActive;
  })
};

export default avatars;
