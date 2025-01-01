import { useState, useRef } from "react";
import Piece from "./Piece";
import "./Pieces.css";
import { copyPosition, createPosition } from "../../helper";

function Pieces() {
  const [state, setState] = useState(createPosition());
  const ref = useRef<HTMLDivElement | null>(null);
  console.log(state);

  const calculateCoordinates = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { width, left, top } = ref.current.getBoundingClientRect();
      const size = width / 8;
      const y = Math.floor((e.clientY - left) / size);
      const x = 7 - Math.floor((e.clientX - top) / size);
      return [x, y];
    }
    return [-1, -1];
  };

  const ondrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    const newPosition = copyPosition(state);
    const [x, y] = calculateCoordinates(e);
    e.preventDefault();
    const [piece, rankStr, fileStr] = e.dataTransfer
      .getData("text/plain")
      .split(",");
    const rank = parseInt(rankStr, 10);
    const file = parseInt(fileStr, 10);
    newPosition[rank][file] = "";
    newPosition[x][y] = piece;

    setState(newPosition);

    console.log(piece, rank, file);
  };

  const ondragover: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };
  return (
    <div ref={ref} className="pieces" onDrop={ondrop} onDragOver={ondragover}>
      {state.map((r, rank) =>
        r.map((f, file) =>
          state[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={state[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
}

export default Pieces;
