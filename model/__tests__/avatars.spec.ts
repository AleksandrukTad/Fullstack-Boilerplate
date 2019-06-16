import { createStore } from "easy-peasy";
import avatarModel, { IAvatar } from "../avatars";

describe("testing avatar redux", () => {
  // arrange
  let store: any;
  let model;

  beforeAll(() => {
    model = { avatars: avatarModel };
    store = createStore(model);
  });

  test("testing get all items", () => {
    const { items } = store.getState().avatars;

    expect(items.length).toEqual(3);
    items.forEach((item: IAvatar, index: number) => {
      expect(item.index).toEqual(index);
    });
  });

  test("testing updating active avatar", () => {
    const newActive = {
      index: 1,
      name: "Not Read",
      styles: {
        borderColor: "rgb(251, 197, 49)",
        overlay: "rgb(251, 197, 49)"
      }
    };

    // act
    store.getActions().avatars.updateActive(newActive);

    // assert
    expect(store.getState().avatars.active.index).toEqual(1);
  });
});
