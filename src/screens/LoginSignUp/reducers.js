const InitialState = {
  user: {},
  isLogged: false,
};

const logUserIn = (state = InitialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return { ...state, ...action.payload, isLogged: true };
    case "INC":
      return {
        ...state,
        inc: 1,
      };
    default:
      return state;
  }
};
export default logUserIn;
