import "jest-dom/extend-expect";
import "jest-styled-components";

// __tests__/fetch.js
import * as Testing from "@testing-library/react";
import React from "react";
// this adds custom jest matchers from jest-dom

import Index from "../index";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(Testing.cleanup);

test("MAke sure that pages loads", async () => {
  const { asFragment } = Testing.render(<Index />);
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  expect(asFragment()).toMatchSnapshot();
});
