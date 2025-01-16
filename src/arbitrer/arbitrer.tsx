import { getRookMoves } from "./getMoves";

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
    return getRookMoves(position, piece, file, rank);
  },
};
export default arbiter;
