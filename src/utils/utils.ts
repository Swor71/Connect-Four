export function getPlayerColor(currentPlayer: number) {
  switch (currentPlayer) {
    case 1:
      return 'maroon';
    case 2:
      return 'goldenrod';

    default:
      return 'ivory';
  }
};

export function getNextPlayer(currentPlayer: number) {
  return currentPlayer === 1 ? 2 : 1;
};
