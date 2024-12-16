import { useState } from "react";
import Piece from "./Piece";
import "./Pieces.css";
import { createPosition } from "../../helper";

function Pieces() {
  const [state, setState] = useState(createPosition());
  console.log(state);

  return (
    <div className="pieces">
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
