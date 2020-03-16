import { GridType } from "../common/types";

export const ROW_AMOUNT = 6;
export const COLUMN_AMOUNT = 7;
export const WIN_CONDITION = 4;
export const MAX_MOVES = ROW_AMOUNT * COLUMN_AMOUNT;

export const EMPTY_GRID: GridType = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

export const PLAYER_COLOR = {
  PLAYER_ONE: 'maroon',
  PLAYER_TWO: 'goldenrod',
  DEFAULT: 'ivory',
};
