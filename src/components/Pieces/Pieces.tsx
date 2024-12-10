import Piece from "./Piece";
import "./Pieces.css";

function Pieces() {
  const position: string[][] = new Array(8)
    .fill("")
    .map((x) => new Array(8).fill(""));

  console.log(position);

  for (let i = 0; i < 8; i++) {
    position[1][i] = "wp";
    position[6][i] = "bp";
  }
  // Initialisation des pièces
  const whitePieces = ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"];
  const blackPieces = ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"];

  whitePieces.forEach((piece, i) => {
    position[0][i] = piece;
    position[7][i] = blackPieces[i];
  });

  return (
    <div className="pieces">
      {position.map((r, rank) =>
        r.map((f, file) =>
          position[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={position[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
}

export default Pieces;
