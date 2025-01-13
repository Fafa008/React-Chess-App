import React, { createContext, useContext, useReducer } from "react";
import { createPosition } from "../helper";

interface AppState {
  position: string[][];

  // add other state properties here
}

interface AppContextProps {
  appState: AppState;

  dispatch: React.Dispatch<any>;
}

const initialState: AppState = {
  position: createPosition(),
};

const AppContext = createContext<AppContextProps>({
  appState: initialState,

  dispatch: () => null,
});

export const useAppContext = () => useContext(AppContext);

export default AppContext;
