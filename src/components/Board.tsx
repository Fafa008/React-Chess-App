import "./Board.css";
import { getCharacter } from "../helper";
import Ranks from "./Bits/Ranks";
import File from "./Bits/File";

const ranks: number[] = Array(8)
  .fill(0)
  .map((x, i) => 8 - i); // Create ranks (8 to 1)

const files: string[] = Array(8)
  .fill(0)
  .map((x, i) => getCharacter(i)); // Create files (A to H)

function Board() {
  function getClassname(i: number, j: number): string {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile--light" : " tile--dark"; // Fixes the syntax and class names
    return c;
  }

  return (
    <div className="Board">
      <Ranks ranks={ranks} />
      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div key={`${rank}-${file}`} className={getClassname(i, j)}></div>
          ))
        )}
      </div>
      <File files={files} />
    </div>
  );
}

export default Board;
