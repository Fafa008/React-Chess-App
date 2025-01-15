import { createPosition } from "./helper";

export type GameState = {
  position: string[][][];
  turn: string;
};
export const initGameState: GameState = {
  position: [createPosition()],
  turn: "w",
};
