import "jest-dom/extend-expect";
import "jest-styled-components";

// __tests__/fetch.js
import { cleanup, render } from "@testing-library/react";
import React from "react";
// this adds custom jest matchers from jest-dom

import Popover from "../Popover";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("Render open popover", async () => {
  const { asFragment } = render(<Popover open={true} />);
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  expect(asFragment()).toMatchSnapshot();
});

test("Render closed popover", async () => {
  const { asFragment } = render(<Popover open={false} />);
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  expect(asFragment()).toMatchSnapshot();
});
