interface PieceProps {
  rank: number;
  file: number;
  piece: string;
}

function Piece({ rank, file, piece }: PieceProps) {
  return (
    <div className={`piece ${piece} p-${file}${rank}`} draggable={true}></div>
  );
}

export default Piece;
