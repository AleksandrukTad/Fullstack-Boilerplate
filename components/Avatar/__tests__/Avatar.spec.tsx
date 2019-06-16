import "jest-dom/extend-expect";
import "jest-styled-components";

import { cleanup, render } from "@testing-library/react";
import React from "react";
// this adds custom jest matchers from jest-dom

import Avatar from "../Avatar";

import { IAvatar } from "../../../model/avatars";

const avatar: IAvatar = {
  index: 0,
  name: "Available",
  styles: {
    borderColor: "rgb(46, 204, 113)"
  }
};

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("Render Avatar", async () => {
  const { asFragment } = render(<Avatar {...avatar} />);
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  expect(asFragment()).toMatchSnapshot();
});
