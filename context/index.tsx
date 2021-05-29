import React, { createContext, useReducer, Dispatch } from "react";
import { LocalNew } from "../types";
import { postReducer, initialState } from "./reducer";
import { AppActions } from "./type";

interface InitialStateType {
  localPosts: LocalNew[];
}

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<AppActions>;
}>({ state: initialState, dispatch: () => null });

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  return <AppContext.Provider value={{state, dispatch }}>{children}</AppContext.Provider>;
};
