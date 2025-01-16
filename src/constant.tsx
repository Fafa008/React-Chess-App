import { createPosition } from "./helper";

export type GameState = {
  position: string[][][];
  turn: string;
  candidateMoves?: any;
};
export const initGameState: GameState = {
  position: [createPosition()],
  turn: "w",
  candidateMoves: [],
};
