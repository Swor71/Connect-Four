import { observable, action, computed } from 'mobx';
import { GridType } from '../common/types';
import { getEmptyGrid, getNextPlayer } from '../utils/utils';

export class AppStore {
  @observable grid: GridType = getEmptyGrid();
  @observable currentPlayer: number = 1;
  @observable isGameActive: boolean = true;
  @observable movesMade: number = 0;
  @observable isTie = false;

  @action resetGame() {
    this.grid = getEmptyGrid();
    this.currentPlayer = 1;
    this.isGameActive = true;
    this.movesMade = 0;
    this.isTie = false;
  }

  @action changeCurrentPlayer() {
    if(this.isGameActive) {
      this.currentPlayer = getNextPlayer(this.currentPlayer);
    }
  }

  @computed get incrementMovesMade() {
    return this.movesMade + 1;
  }

  @action setNewState(newGrid:GridType, isGameActive:boolean, movesMade: number) {
      this.grid = newGrid;
      this.movesMade = movesMade;
      this.isGameActive = isGameActive;
  }
}

export const store = new AppStore();
