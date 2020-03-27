const initialState = {
  isLoggedIn: false,
  domain: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      console.log("USER_LOGIN", action);
      return {
        ...state,
        isLoggedIn: true,
        domain: action.data.domain
      };
    case "USER_LOGOUT":
      console.log("USER_LOGOUT", action);
      return {
        ...state,
        isLoggedIn: false,
        userName: ""
      };
    default:
      return state;
  }
};

export default authReducer;
