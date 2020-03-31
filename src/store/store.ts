import { observable, action } from 'mobx';
import { GridType, Player } from '../common/types';
import { getEmptyGrid, getNextPlayer } from '../utils/utils';
import cloneDeep from 'lodash/cloneDeep';

export class AppStore {
  @observable grid: GridType;
  @observable currentPlayer: Player;
  @observable isGameActive: boolean;
  @observable movesMade: number;
  @observable isTie: boolean;

  constructor(){
    this.grid = getEmptyGrid();
    this.currentPlayer = 1;
    this.isGameActive = true;
    this.movesMade = 0;
    this.isTie = false;
  }

  @action resetGame = () => {
    this.grid = getEmptyGrid();
    this.currentPlayer = 1;
    this.isGameActive = true;
    this.movesMade = 0;
    this.isTie = false;
  }

  @action setPlayerToken = (grid: GridType) => {
    this.grid = cloneDeep(grid);
  }

  @action setGameActiveState = (isGameActive: boolean) => {
    this.isGameActive = isGameActive;

    if(isGameActive) {
      this.changeCurrentPlayer();
    }
  }

  changeCurrentPlayer() {
    this.currentPlayer = getNextPlayer(this.currentPlayer);
  }
}

export const store = new AppStore();
