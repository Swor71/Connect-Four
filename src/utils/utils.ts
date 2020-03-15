export function getPlayerColor(playerNumber: number) {
  switch (playerNumber) {
    case 1:
      return 'maroon';
    case 2:
      return 'goldenrod';

    default:
      return 'ivory';
  }
}
