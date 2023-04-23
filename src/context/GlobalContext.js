import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer, { intialstate } from "./AppReducer";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialstate);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
export const useAuth = () => {
  return useContext(GlobalContext);
};
