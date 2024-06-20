import { createStore } from "redux";
import reducers from "./reducer/index.js";

//createStore takes two arguments
// 1. all the combined reducers
// 2. second argument is state

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
