import { PLAYER_COLOR } from "../consts";
import { GridType } from "../common/types";

export function getPlayerColor(currentPlayer: number) {
  switch (currentPlayer) {
    case 1:
      return PLAYER_COLOR.PLAYER_ONE;
    case 2:
      return PLAYER_COLOR.PLAYER_TWO;

    default:
      return PLAYER_COLOR.DEFAULT;
  }
};

export function getNextPlayer(currentPlayer: number) {
  return currentPlayer === 1 ? 2 : 1;
};

export class EmptyGrid {
  grid: GridType;

  constructor() {
    this.grid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  };
}
