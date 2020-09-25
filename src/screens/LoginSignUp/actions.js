import { loginUser } from "./../../api/apiCore";
import { createAction } from "redux-actions";
import store from "./../../store";

export const setLoggedUser = createAction("LOGIN");
export const inc = createAction("INC");
const loginUserURL = "http://localhost:9191/login";

export const login = (data) => {
  return loginUser(data)
    .then((response) => {
      return response.data;
    })
    .then((user) => {
      console.log(user);
      store.dispatch(setLoggedUser(user));
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const fetchProfiles = () => (dispatch) => {};
