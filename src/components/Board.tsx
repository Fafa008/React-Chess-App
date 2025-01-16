import "./Board.css";
import Ranks from "./Bits/Ranks";
import File from "./Bits/File";
import Pieces from "./Pieces/Pieces";
import { useAppContext } from "../contexts/Context";

function Board() {
  const ranks: number[] = Array(8)
    .fill(0)
    .map((x, i) => 8 - i);
  const files: number[] = Array(8)
    .fill(0)
    .map((x, i) => i + 1);

  const { appState } = useAppContext();
  const position = appState.position[appState.position.length - 1];

  function getClassname(i: number, j: number): string {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile--dark" : " tile--light";
    if (
      appState.candidateMoves?.find((m: number[]) => m[0] === i && m[1] === j)
    ) {
      if (position[i][j]) {
        c += " attacking";
      } else {
        c += " highlight";
      }
    }

    return c;
  }
  return (
    <div className="Board">
      <Ranks ranks={ranks} />
      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div
              key={file + "" + rank}
              className={getClassname(7 - i, j)}
            ></div>
          ))
        )}
      </div>
      <Pieces />
      <File files={files} />
    </div>
  );
}

export default Board;
