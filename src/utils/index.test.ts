import { checkForWin } from "./index";
import { emptyGrid } from "../consts";

const mockGridVertical = [
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0],
];

const mockGridHorizontal = [
  [1, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0],
];

const mockGridDiagonal = [
  [1, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0],
]

describe('Game logic checks', () => {
  it('checks grid for horizontal win', () => {
    const result = checkForWin(mockGridHorizontal);

    expect(result).toBe(true);
  });

  it('checks grid for vertical win', () => {
    const result = checkForWin(mockGridVertical);

    expect(result).toBe(true);
  });

  it('checks grid for diagonal right win', () => {
    const result = checkForWin(mockGridDiagonal);

    expect(result).toBe(true);
  });

  it('returns false for empty grid', () => {
    const result = checkForWin(emptyGrid);

    expect(result).toBe(false);
  });
})
