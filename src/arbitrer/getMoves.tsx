export const getKnightMoves = (
  position: { [x: string]: { [x: string]: string } },
  file: number,
  rank: number
) => {
  const moves: number[][] = [];
  const enemy = position[rank][file].startsWith("w") ? "b" : "w";

  const candidates = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [-2, -1],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  candidates.forEach((c) => {
    const cell = position?.[rank + c[0]]?.[file + c[1]];
    if (cell !== undefined && (cell.startsWith(enemy) || cell === "")) {
      moves.push([rank + c[0], file + c[1]]);
    }
  });

  return moves;
};

export const getRookMoves = (
  position: { [x: string]: { [x: string]: string } },
  piece: any[],
  file: number,
  rank: number
) => {
  const moves: number[][] = [];
  const us = piece[0];
  const enemy = us === "w" ? "b" : "w";

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  direction.forEach((dir) => {
    for (let i = 1; i < 8; i++) {
      const x = rank + i * dir[0];
      const y = file + i * dir[1];
      if (position?.[x]?.[y] === undefined) {
        break;
      }
      if (position[x][y].startsWith(enemy)) {
        moves.push([x, y]);
        break;
      }
      if (position[x][y].startsWith(us)) {
        break;
      }
      moves.push([x, y]);
    }
  });
  return moves;
};

export const getBishopsMoves = (
  position: { [x: string]: { [x: string]: string } },
  piece: any[],
  file: number,
  rank: number
) => {
  const moves: number[][] = [];
  const us = piece[0];
  const enemy = us === "w" ? "b" : "w";

  const direction = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  direction.forEach((dir) => {
    for (let i = 1; i < 8; i++) {
      const x = rank + i * dir[0];
      const y = file + i * dir[1];
      if (position?.[x]?.[y] === undefined) {
        break;
      }
      if (position[x][y].startsWith(enemy)) {
        moves.push([x, y]);
        break;
      }
      if (position[x][y].startsWith(us)) {
        break;
      }
      moves.push([x, y]);
    }
  });
  return moves;
};

export const getQueenMoves = (
  position: { [x: string]: { [x: string]: string } },
  piece: any[],
  file: number,
  rank: number
) => {
  const moves: number[][] = [
    ...getRookMoves(position, piece, file, rank),
    ...getBishopsMoves(position, piece, file, rank),
  ];

  return moves;
};
