import "./Board.css";
import Ranks from "./Bits/Ranks";
import File from "./Bits/File";
import Pieces from "./Pieces/Pieces";

function Board() {
  function getClassname(i: number, j: number): string {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile--dark" : " tile--light";
    return c;
  }
  const ranks: number[] = Array(8)
    .fill(0)
    .map((x, i) => 8 - i); // Create ranks (8 to 1)

  const files: number[] = Array(8)
    .fill(0)
    .map((x, i) => i); // Create files (A to H)

  return (
    <div className="Board">
      <Ranks ranks={ranks} />
      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div key={rank + "" + file} className={getClassname(9 - i, j)}>
              {file}
              {rank}
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
