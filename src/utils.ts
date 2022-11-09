import { CHUNK_SIZE, ROW_COL_SIZE } from "./constants";

// Returns the starting index of the
// row that a given index is a member of.
export function getRelativeRowStart(relativeTo: number) {
  return Math.floor(relativeTo / ROW_COL_SIZE) * ROW_COL_SIZE;
}

// Returns the starting index of the
// column that a given index is a member of.
export function getRelativeColStart(relativeTo: number) {
  return relativeTo % ROW_COL_SIZE;
}

// Returns the starting index of the
// 3x3 chunk that a given index is a member of.
export function getRelativeChunkStart(relativeTo: number) {
  return (
    relativeTo -
    ((relativeTo % ROW_COL_SIZE) % CHUNK_SIZE) -
    ROW_COL_SIZE * (Math.floor(relativeTo / ROW_COL_SIZE) % CHUNK_SIZE)
  );
}

// Used to step through a row given that row starting point and
// an offset.
export function getRowIndex(rowIndexStart: number, offset: number) {
  return rowIndexStart + offset;
}

// Used to step through a column given that column starting point and
// an offset.
export function getColIndex(colIndexStart: number, offset: number) {
  return colIndexStart + offset * ROW_COL_SIZE;
}

// Used to step through a 3x3 chunk given that chunk starting point and
// an offset.
export function getChunkIndex(chunkIndexStart: number, offset: number) {
  return (
    chunkIndexStart +
    ROW_COL_SIZE * Math.floor(offset / CHUNK_SIZE) +
    (offset % CHUNK_SIZE)
  );
}

// Returns `true` if the given value is valid at the given index,
// and `false` if it is invalid. Based on standard Sudoku rules.
export function valueIsValidAtIndex(
  board: number[],
  index: number,
  value: number
) {
  const rowStart = getRelativeRowStart(index);
  const colStart = getRelativeColStart(index);
  const chunkStart = getRelativeChunkStart(index);

  for (let offset = 0; offset < ROW_COL_SIZE; offset++) {
    const rowIndex = getRowIndex(rowStart, offset);
    const colIndex = getColIndex(colStart, offset);
    const chunkIndex = getChunkIndex(chunkStart, offset);

    const notValidInRow = board[rowIndex] === value;
    const notValidInCol = board[colIndex] === value;
    const notValidInChunk = board[chunkIndex] === value;

    if (notValidInRow || notValidInCol || notValidInChunk) {
      return false;
    }
  }

  return true;
}
