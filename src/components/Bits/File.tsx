import "./File.css";
import { getCharacter } from "../../helper";

function File({ files }: { files: number[] }) {
  return (
    <div className="file">
      {files.map((file) => (
        <span key={file}>{getCharacter(file)}</span>
      ))}
    </div>
  );
}

export default File;
