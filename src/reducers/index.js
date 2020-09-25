import { combineReducers } from "redux";
import logUserIn from "../screens/LoginSignUp/reducers";
import searchReducer from "../screens/SearchResults/reducers";

const masterReducer = combineReducers({
  loggedUser: logUserIn,
  search: searchReducer,
});
export default masterReducer;
