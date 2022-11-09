import { BOARD_SIZE, ROW_COL_SIZE } from "./constants";
import { valueIsValidAtIndex } from "./utils";

export default function solve(board: number[]) {
  // Create a copy of board for mutating.
  const _board = [...board];

  // Enter the recursive solve method starting at index 0.
  if (!recursiveSolve(_board, 0)) {
    throw new Error("Puzzle was unable to be solved");
  }

  return _board;
}

function recursiveSolve(board: number[], index: number) {
  // If we are at the end of the board we exit.
  if (index >= BOARD_SIZE) {
    return true;
  }

  // If the current box is not empty move on to the next one.
  if (board[index] !== 0) {
    return recursiveSolve(board, index + 1);
  }

  // Loop through possible values.
  for (let value = 1; value <= ROW_COL_SIZE; value++) {
    // Check if the current value is valid at this index.
    if (valueIsValidAtIndex(board, index, value)) {
      // Set the index to the valid value.
      board[index] = value;

      // Move on to the next index.
      if (recursiveSolve(board, index + 1)) {
        // If this soltuion path reaches the base case and
        // `true` is returned, we bubble `true` up through
        // the recursion chain.
        return true;
      }
      // Otherwise we continue to check the remaining values
      // for this index.
    }
  }

  // All values were tried and there was valid solution path.
  // Set the current box back to zero.
  board[index] = 0;

  // Return `false` and continue on the previous index.
  return false;
}
