import { GridType } from "../common/types";

export const rowAmount = 6;
export const columnAmount = 7;
export const winCondition = 4;

export const emptyGrid: GridType = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

export const playerColor = {
  PLAYER_ONE: 'maroon',
  PLAYER_TWO: 'goldenrod',
  DEFAULT: 'ivory',
};
