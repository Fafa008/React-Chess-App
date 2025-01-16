import actionTypes from "./actionTypes";

export const makeNewMove = ({ newPosition }: { newPosition: any }) => {
  return {
    type: actionTypes.NEW_MOVE,
    payload: { newPosition },
  };
};

export const generateCandidateMoves = ({
  candidateMoves,
}: {
  candidateMoves: any;
}) => {
  return {
    type: actionTypes.GENERATE_CANDIDATE_MOVES,
    payload: { candidateMoves },
  };
};

export const clearCandidate = () => {
  return {
    type: actionTypes.CLEAR_CANDIDATE_MOVES,
  };
};
