import { createContext, useReducer, Dispatch, useEffect } from "react";
import { getInitStateFromStorage } from "utils";
import { setState } from "./action";
import { postReducer, initialState, InitialState } from "./reducer";
import { AppActions } from "./type";

export const AppContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<AppActions>;
}>({ state: initialState, dispatch: () => null });

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    const localStorageState = getInitStateFromStorage();
    if (localStorageState) {
      dispatch(setState(localStorageState as InitialState));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
