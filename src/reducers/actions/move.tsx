import { act } from "react";
import actionTypes from "./actionTypes";

export const makeNewMove = ({ newPosition }: { newPosition: any }) => {
  return {
    type: actionTypes.NEW_MOVE,
    payload: { newPosition },
  };
};
