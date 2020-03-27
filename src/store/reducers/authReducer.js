const initialState = {
  isLoggedIn: false,
  domain: "",
  id: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      console.log("USER_LOGIN", action);
      return {
        ...state,
        isLoggedIn: true,
        domain: action.data.domain,
        id: action.data.id
      };
    case "USER_LOGOUT":
      console.log("USER_LOGOUT", action);
      return {
        ...state,
        isLoggedIn: false,
        domain: "",
        id: ""
      };
    default:
      return state;
  }
};

export default authReducer;
