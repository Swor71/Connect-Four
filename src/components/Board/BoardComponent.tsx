import React from 'react';
import styled from 'styled-components';
import { PlayerToken, TOKEN_MARGIN } from '../PlayerToken/PlayerTokenComponent';
import { GridType } from '../../common/types';
import { CheckUtils } from '../../utils/gameLogic';
import { ROW_AMOUNT, COLUMN_AMOUNT } from '../../consts';
import { observer } from 'mobx-react';
import { store } from '../../store/store';

interface BoardProps {}

interface BoardState {
  grid: GridType;
  currentPlayer: 1 | 2;
  isGameActive: boolean;
  movesMade: number;
}

const StyledBoard = styled.div`
  width: ${700 + (COLUMN_AMOUNT * TOKEN_MARGIN * 2)}px;
  height: ${600 + (ROW_AMOUNT * TOKEN_MARGIN * 2)}px;
  background: midnightblue;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(${COLUMN_AMOUNT}, 1fr);
  grid-template-rows: repeat(${ROW_AMOUNT}, 1fr);
  border-radius: 6px;
`;
@observer
export class Board extends React.Component<BoardProps, BoardState> {

  placeToken = (event: React.MouseEvent<HTMLDivElement>) => {
    const { grid, currentPlayer, isGameActive } = store;

    const el = event.target as HTMLDivElement;

    const x = Number(el.getAttribute('x'));
    const y = Number(el.getAttribute('y'));

    if(x !== ROW_AMOUNT - 1 && grid[x + 1][y] === 0) {
      return;
    }

    if(isGameActive && grid[x][y] === 0) {
      const utils = new CheckUtils(grid, currentPlayer);

      store.setPlayerToken(x, y);

      const isGameActive = !utils.checkForWin();

      if(!isGameActive) {
        store.isGameActive = isGameActive;
      } else {
        store.changeCurrentPlayer();
      }
    }
  }

  render() {
    const { grid } = store;

    return (
      <StyledBoard>
        {grid.map((xRow, xIndex) => {
          return xRow.map((xColumn, yIndex) => {
            return (
              <PlayerToken
                key={`${xIndex} ${yIndex}`}
                onClick={this.placeToken}
                x={xIndex}
                y={yIndex}
                player={grid[xIndex][yIndex]}
              />
            )
          })
        })}
      </StyledBoard>
    )
  }
}
