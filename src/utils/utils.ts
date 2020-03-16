import { playerColor } from "../consts";

export function getPlayerColor(currentPlayer: number) {
  switch (currentPlayer) {
    case 1:
      return playerColor.PLAYER_ONE;
    case 2:
      return playerColor.PLAYER_TWO;

    default:
      return playerColor.DEFAULT;
  }
};

export function getNextPlayer(currentPlayer: number) {
  return currentPlayer === 1 ? 2 : 1;
};
