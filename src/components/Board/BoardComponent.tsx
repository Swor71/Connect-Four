import React from 'react';
import styled from 'styled-components';
import { PlayerToken, TOKEN_MARGIN } from '../PlayerToken/PlayerTokenComponent';
import { GridType } from '../../common/types';
import { CheckUtils } from '../../utils/gameLogic';
import { ROW_AMOUNT, COLUMN_AMOUNT } from '../../consts';
import { getNextPlayer, getEmptyGrid } from '../../utils/utils';
import { BoardControl } from '../Board/BoardControl';

interface BoardProps {}

interface BoardState {
  grid: GridType;
  currentPlayer: 1 | 2;
  isGameActive: boolean;
  movesMade: number;
}

const BoardWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
`;

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

export class Board extends React.Component<BoardProps, BoardState> {
  state: BoardState = {
    grid: getEmptyGrid(),
    currentPlayer: 1,
    isGameActive: true,
    movesMade: 0,
  }

  placeToken = (event: React.MouseEvent<HTMLDivElement>) => {
    const { grid, currentPlayer, isGameActive } = this.state;

    const el = event.target as HTMLDivElement;

    const x = Number(el.getAttribute('x'));
    const y = Number(el.getAttribute('y'));

    if(x !== ROW_AMOUNT - 1 && grid[x + 1][y] === 0) {
      return;
    }

    if(isGameActive && grid[x][y] === 0) {
      const utils = new CheckUtils(grid, currentPlayer);

      const newGrid = [...grid];
      newGrid[x][y] = currentPlayer;

      // TODO check for draw -> movesMade vs MAX_MOVES

      this.setState(prevState => ({
        grid: newGrid,
        movesMade: prevState.movesMade + 1,
        isGameActive: !utils.checkForWin(),
        }),() => {
            this.changeCurrentPlayer();
          }
        )
    }
  }

  changeCurrentPlayer = () => {
    const { currentPlayer, isGameActive } = this.state;

    if(isGameActive) {
      const nextPlayer = getNextPlayer(currentPlayer);

      this.setState({ currentPlayer: nextPlayer});
    }
  }

  resetGame = () => {
    this.setState({
      grid: getEmptyGrid(),
      isGameActive: true,
      movesMade: 0,
      currentPlayer: 1,
    })
  }

  render() {
    const { grid, isGameActive, currentPlayer } = this.state;

    return (
      <BoardWrapper>
        <div>
          <h1>Connect Four</h1>
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
        </div>
        <BoardControl
          isGameActive={isGameActive}
          currentPlayer={currentPlayer}
          resetGame={this.resetGame}
        />
      </BoardWrapper>
    )
  }
}
