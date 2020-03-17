import { PLAYER_COLOR, EMPTY_GRID } from "../consts";
import { GridType } from "../common/types";
import cloneDeep from 'lodash/cloneDeep'

export const getPlayerColor = (currentPlayer: number) => {
  switch (currentPlayer) {
    case 1:
      return PLAYER_COLOR.PLAYER_ONE;
    case 2:
      return PLAYER_COLOR.PLAYER_TWO;

    default:
      return PLAYER_COLOR.DEFAULT;
  }
};

export const getNextPlayer = (currentPlayer: number) => currentPlayer === 1 ? 2 : 1;

export const getEmptyArr = (): GridType => cloneDeep(EMPTY_GRID);
