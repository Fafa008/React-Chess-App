import React from "react";
import "./File.css";

function File({ files }: { files: string[] }) {
  return (
    <div className="file">
      {files.map((file) => (
        <span key={file}>{file}</span>
      ))}
    </div>
  );
}

export default File;
