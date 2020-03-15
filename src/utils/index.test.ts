import { checkForWin } from "./index";

const mockGridVertical = [
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0],
]

const mockGridHorizontal = [
  [1, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 1, 1],
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
})
