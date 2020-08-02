import { combineReducers } from "redux";
import userAuthReducer from "../screens/LoginSignUp/reducers";
import searchReducer from "../screens/SearchResults/reducers";

export default combineReducers({
  userAuthReducer,
  searchReducer,
});
