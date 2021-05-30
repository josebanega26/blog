import React, { createContext, useReducer, Dispatch } from "react";
import { postReducer, initialState, InitialState } from "./reducer";
import { AppActions } from "./type";

export const AppContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<AppActions>;
}>({ state: initialState, dispatch: () => null });

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  React.useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
