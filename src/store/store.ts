import { observable, action } from 'mobx';
import { GridType } from '../common/types';
import { getEmptyGrid, getNextPlayer } from '../utils/utils';

export class AppStore {
  @observable grid: GridType = getEmptyGrid();
  @observable currentPlayer: number = 1;
  @observable isGameActive: boolean = true;
  @observable movesMade: number = 0;
  @observable isTie: boolean = false;

  @action resetGame = () => {
    this.grid = getEmptyGrid();
    this.currentPlayer = 1;
    this.isGameActive = true;
    this.movesMade = 0;
    this.isTie = false;
  }

  @action setPlayerToken = (x: number, y: number) => {
    this.grid[x][y] = this.currentPlayer;
  }

  @action changeCurrentPlayer = () => {
    this.currentPlayer = getNextPlayer(this.currentPlayer);
  }

  @action setGameActiveState = (isGameActive: boolean) => {
    this.isGameActive = isGameActive;

    if(isGameActive) {
      this.changeCurrentPlayer();
    }
  }
}

export const store = new AppStore();
