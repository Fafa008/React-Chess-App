import "./Board.css";
import { getCharacter } from "../helper";

const ranks: number[] = Array(8)
  .fill(0)
  .map((x, i) => 8 - i); // Create ranks (8 to 1)

const files: string[] = Array(8)
  .fill(0)
  .map((x, i) => getCharacter(i)); // Create files (A to H)

function Board() {
  function getClassname(i: number, j: number): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="Board">
      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div key={`${rank}-${file}`} className={getClassname(i, j)}>
              {file}-{rank}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Board;
