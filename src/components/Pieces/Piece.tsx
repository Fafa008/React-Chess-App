interface PieceProps {
  rank: number;
  file: number;
  piece: string;
}

function Piece({ rank, file, piece }: PieceProps) {
  const ondragstart = (e: any) => {
    e.dataTransfer.setData("text/plain", `${piece}, ${rank}, ${file}`);
  };
  return (
    <div
      className={`piece ${piece} p-${file}${rank}`}
      draggable={true}
      onDragStart={ondragstart}
    ></div>
  );
}

export default Piece;
