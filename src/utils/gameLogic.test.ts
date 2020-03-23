import { CheckUtils } from "./gameLogic";
import { EMPTY_GRID } from "../consts";

const mockGridVertical = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [2, 1, 2, 1, 0, 0, 0],
  [2, 2, 2, 1, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 1],
  [1, 1, 2, 1, 2, 2, 1],
];

const mockGridHorizontal = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [2, 2, 1, 1, 1, 1, 0],
  [2, 1, 2, 1, 2, 1, 1],
  [1, 1, 2, 2, 2, 2, 1],
];

const mockGridDiagonalRight = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 2, 0, 0, 0],
  [1, 2, 2, 1, 0, 0, 0],
  [2, 2, 1, 2, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 1],
  [1, 1, 2, 2, 1, 1, 1],
];

const mockGridDiagonalLeft = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [2, 1, 2, 1, 0, 0, 0],
  [2, 2, 1, 2, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 1],
  [1, 1, 2, 1, 2, 2, 1],
];


describe('Game logic', () => {

  describe('Win conditions for player 1', () => {
    it('checks grid for horizontal win', () => {
      const utils = new CheckUtils(mockGridHorizontal, 1);
      const result = utils.checkForWin();

      expect(result).toBe(true);
    });

    it('checks grid for vertical win', () => {
      const utils = new CheckUtils(mockGridVertical, 1);
      const result = utils.checkForWin();

      expect(result).toBe(true);
    });

    it('checks grid for diagonal right win', () => {
      const utils = new CheckUtils(mockGridDiagonalRight, 1);
      const result = utils.checkForWin();

      expect(result).toBe(true);
    });

    it('checks grid for diagonal left win', () => {
      const utils = new CheckUtils(mockGridDiagonalLeft, 1);
      const result = utils.checkForWin();

      expect(result).toBe(true);
    });

    it('returns false for empty grid', () => {
      const utils = new CheckUtils(EMPTY_GRID, 1);
      const result = utils.checkForWin();

      expect(result).toBe(false);
    });
  })

  describe('Win conditions for player 2', () => {
    it('checks grid for horizontal win', () => {
      const utils = new CheckUtils(mockGridHorizontal, 2);
      const result = utils.checkForWin();

      expect(result).toBe(true);
    });

    it('checks grid for vertical win', () => {
      const utils = new CheckUtils(mockGridVertical, 2);
      const result = utils.checkForWin();

      expect(result).toBe(true);
    });

    it('checks grid for diagonal right win', () => {
      const utils = new CheckUtils(mockGridDiagonalRight, 2);
      const result = utils.checkForWin();

      expect(result).toBe(true);
    });

    it('checks grid for diagonal left win', () => {
      const utils = new CheckUtils(mockGridDiagonalLeft, 2);
      const result = utils.checkForWin();

      expect(result).toBe(true);
    });

    it('returns false for empty grid', () => {
      const utils = new CheckUtils(EMPTY_GRID, 2);
      const result = utils.checkForWin();

      expect(result).toBe(false);
    });
  })
})
