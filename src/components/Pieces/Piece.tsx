interface PieceProps {
  rank: number;
  file: number;
  piece: string;
}

function Piece({ rank, file, piece }: PieceProps) {
  const ondragstart: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.dataTransfer.effectAllowed = `move`;
    e.dataTransfer.setData("text/plain", `${piece}, ${rank}, ${file}`);
    setTimeout(() => {
      (e.target as HTMLElement).style.display = "none";
    }, 0);
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
