import React from 'react';
import styled from 'styled-components';
import { PlayerToken, TOKEN_MARGIN } from '../PlayerToken/PlayerTokenComponent';
import { CheckUtils } from '../../utils/gameLogic';
import { ROW_AMOUNT, COLUMN_AMOUNT } from '../../consts';
import { observer } from 'mobx-react';
import { store } from '../../store/store';
import { cloneDeep } from 'lodash';


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
export class Board extends React.Component {

  placeToken = (event: React.MouseEvent<HTMLDivElement>) => {
    const { grid, currentPlayer, isGameActive } = store;

    const el = event.target as HTMLDivElement;

    const x = Number(el.getAttribute('x'));
    const y = Number(el.getAttribute('y'));

    if(x !== ROW_AMOUNT - 1 && grid[x + 1][y] && x !== 0) {
      return;
    }

    if(isGameActive && grid[x][y] === 0) {
      const newGrid = cloneDeep(grid);
      let firstEmptySpace = 0;

      for(let i = ROW_AMOUNT - 1; i > 0; i--) {
        if(newGrid[i][y] === 0) {
          firstEmptySpace = i;
          break;
        }
      }

      newGrid[firstEmptySpace][y] = currentPlayer;

      store.setPlayerToken(newGrid);

      const utils = new CheckUtils(newGrid, currentPlayer);
      const isGameActive = !utils.checkForWin();

      store.setGameActiveState(isGameActive);
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
