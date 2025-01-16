import arbiter from "../../arbitrer/arbitrer";
import { useAppContext } from "../../contexts/Context";
import { generateCandidateMoves } from "../../reducers/actions/move";

interface PieceProps {
  rank: number;
  file: number;
  piece: string;
}

function Piece({ rank, file, piece }: PieceProps) {
  const { appState, dispatch } = useAppContext();
  const { turn, position } = appState;
  const currentPosition = position[position.length - 1];

  const ondragstart: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.dataTransfer.effectAllowed = `move`;
    e.dataTransfer.setData("text/plain", `${piece}, ${rank}, ${file}`);
    setTimeout(() => {
      (e.target as HTMLElement).style.display = "none";
    }, 0);
    if (turn === piece[0]) {
      const candidateMoves = arbiter.getRegularMoves({
        position: currentPosition,
        piece,
        file,
        rank,
      });
      dispatch(generateCandidateMoves({ candidateMoves }));
    }
  };
  const ondragend: React.DragEventHandler<HTMLDivElement> = (e) => {
    (e.target as HTMLElement).style.display = "block";
  };

  return (
    <div
      className={`piece ${piece} p-${file}${rank}`}
      draggable={true}
      onDragStart={ondragstart}
      onDragEnd={ondragend}
    ></div>
  );
}

export default Piece;
