import { describe, expect, test } from "@jest/globals";
import solve from "../src";

const board =
  "300060405016370028490005703020006050754208090100700080040030000075649800030800500"
    .split("")
    .map(Number);

const solution =
  "387962415516374928492185763823496157754218396169753284948531672275649831631827549"
    .split("")
    .map(Number);

describe("solve function", () => {
  test("should solve board", () => {
    expect(solve(board)).toEqual(solution);
  });
});
