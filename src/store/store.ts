import { observable } from 'mobx';

class AppStore {
  @observable currentPlayer: number = 1;
  @observable isGameActive: boolean = true;
  @observable movesMade: number = 0;
  @observable isTie = false;
}

// state: BoardState = {
//   grid: getEmptyGrid(),
//   currentPlayer: 1,
//   isGameActive: true,
//   movesMade: 0,
// }

export const store = new AppStore();
