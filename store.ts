import { createStore } from "easy-peasy";

import model from "./model";

const store = createStore(model);

const { getState, getActions } = store;

// We export the hooks from our store as they will contain the
// type information on them
export { getState, getActions };

export default store;
