import React, { createContext, useContext } from "react";
import { createPosition } from "../helper";

interface AppState {
  position: string[][][];
  turn: string;
  candidateMoves?: any;
}

interface AppContextProps {
  appState: AppState;

  dispatch: React.Dispatch<any>;
}

const initialState: AppState = {
  position: createPosition(),
  turn: "",
};

const AppContext = createContext<AppContextProps>({
  appState: initialState,

  dispatch: () => null,
});

export const useAppContext = () => useContext(AppContext);

export default AppContext;
