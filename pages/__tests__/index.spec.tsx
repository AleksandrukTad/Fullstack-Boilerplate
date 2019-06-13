import "jest-dom/extend-expect"
import "jest-styled-components"

// __tests__/fetch.js
import React from "react"
import {
  render,
  cleanup,
} from "@testing-library/react"
// this adds custom jest matchers from jest-dom

import Index from "../index"

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test('', async () => {
  const { asFragment } = render( <Index />);
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  expect(asFragment()).toMatchSnapshot();
})