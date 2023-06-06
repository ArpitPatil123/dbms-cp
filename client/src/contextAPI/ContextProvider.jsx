import { useContext, useReducer } from "react";
import AppContext from "./AppContext";
import { reducerAction } from "./ReducerActions";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  isLogin: localStorage.getItem("isLogin"),
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerAction, initialState);

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

export const useAppContext = () => useContext(AppContext);
