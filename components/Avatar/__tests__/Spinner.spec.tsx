import "jest-dom/extend-expect";
import "jest-styled-components";

// __tests__/fetch.js
import { cleanup, render } from "@testing-library/react";
import React from "react";
// this adds custom jest matchers from jest-dom

import Spinner from "../Spinner";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("Render spinner with loading true", async () => {
  const { asFragment } = render(<Spinner loading={true} />);
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  expect(asFragment()).toMatchSnapshot();
});

test("Render spinner with loading false", async () => {
  const { asFragment } = render(<Spinner loading={false} />);
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  expect(asFragment()).toMatchSnapshot();
});
