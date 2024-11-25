import React from "react";
import "./Ranks.css";

function Ranks({ ranks }: { ranks: number[] }) {
  return (
    <div className="rank">
      {ranks.map((rank) => (
        <span key={rank}>{rank}</span>
      ))}
    </div>
  );
}

export default Ranks;
