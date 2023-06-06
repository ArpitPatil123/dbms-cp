export const reducerAction = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      // login user
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };

    // logout user
    case "LOGOUT_USER":
      return {
        ...state,
        isLogin: false,
        user: null,
      };
  }
};
