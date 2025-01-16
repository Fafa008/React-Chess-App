import actionTypes from "./actions/actionTypes";

interface State {
  position: string[][][];
  turn: string;
  candidateMoves?: any;
}
interface Action {
  payload: any;
  type: string;
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.NEW_MOVE: {
      let { turn, position } = state;

      turn = turn === "w" ? "b" : "w";

      position = [...position, action.payload.newPosition];
      return {
        ...state,
        turn,
        position,
      };
    }
    case actionTypes.GENERATE_CANDIDATE_MOVES: {
      return {
        ...state,
        candidateMoves: action.payload.candidateMoves,
      };
    }
    case actionTypes.CLEAR_CANDIDATE_MOVES: {
      return {
        ...state,
        candidateMoves: [],
      };
    }
    default:
      return state;
  }
};
