import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import myLogger from "./middlewares/myLogger";
import blogReducer from "./blog/blogReducer";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );
const store = createStore(
  blogReducer,
  composeWithDevTools(applyMiddleware(logger, myLogger))
);

export default store;
