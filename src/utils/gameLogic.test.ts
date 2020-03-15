import { CheckUtils } from "./gameLogic";
import { emptyGrid } from "../consts";

const mockGridVertical = [
  [1, 0, 1, 1, 0, 2, 1],
  [1, 0, 0, 0, 0, 2, 1],
  [1, 0, 1, 0, 0, 2, 0],
  [1, 0, 1, 1, 1, 2, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0],
];

const mockGridHorizontal = [
  [1, 0, 1, 1, 0, 1, 1],
  [0, 2, 2, 2, 2, 0, 1],
  [1, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0],
];

const mockGridDiagonalRight = [
  [1, 0, 1, 2, 0, 1, 1],
  [0, 0, 2, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 0],
  [2, 0, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0],
];

const mockGridDiagonalLeft = [
  [1, 0, 1, 1, 0, 1, 1],
  [2, 0, 0, 1, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 0],
  [1, 0, 2, 1, 0, 1, 1],
  [0, 0, 0, 2, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0],
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
      const utils = new CheckUtils(emptyGrid, 1);
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
      const utils = new CheckUtils(emptyGrid, 2);
      const result = utils.checkForWin();

      expect(result).toBe(false);
    });
  })
})
