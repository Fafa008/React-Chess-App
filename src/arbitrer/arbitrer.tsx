import {
  getRookMoves,
  getKnightMoves,
  getBishopsMoves,
  getQueenMoves,
} from "./getMoves";

const arbiter = {
  getRegularMoves: function ({
    position,
    piece,
    file,
    rank,
  }: {
    position: any;
    piece: any;
    file: any;
    rank: any;
  }) {
    if (piece.endsWith("r")) return getRookMoves(position, piece, file, rank);
    if (piece.endsWith("n")) return getKnightMoves(position, file, rank);
    if (piece.endsWith("b"))
      return getBishopsMoves(position, piece, file, rank);
    if (piece.endsWith("q")) return getQueenMoves(position, piece, file, rank);
  },
};
export default arbiter;
