import thunk from "redux-thunk";
import masterReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  masterReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
