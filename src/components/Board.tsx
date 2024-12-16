import "./Board.css";
import Ranks from "./Bits/Ranks";
import File from "./Bits/File";
import Pieces from "./Pieces/Pieces";
import { getCharacter } from "../helper";

function Board() {
  function getClassname(i: number, j: number): string {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile--dark" : " tile--light";
    return c;
  }
  const ranks: number[] = Array(8)
    .fill(0)
    .map((x, i) => 8 - i);

  const files: number[] = Array(8)
    .fill(0)
    .map((x, i) => i);

  return (
    <div className="Board">
      <Ranks ranks={ranks} />
      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div key={file + "" + rank} className={getClassname(9 - i, j)}>
              {rank}
              {getCharacter(file)}
            </div>
          ))
        )}
      </div>
      <Pieces />
      <File files={files} />
    </div>
  );
}

export default Board;
