import React from 'react';
import styled from 'styled-components';
import { PlayerToken, tokenMargin } from '../PlayerToken/PlayerTokenComponent';
import { GridType } from '../../common/types';
import { CheckUtils } from '../../utils/gameLogic';
import { ROW_AMOUNT, COLUMN_AMOUNT, MAX_MOVES } from '../../consts';
import { getNextPlayer, EmptyGrid } from '../../utils/utils';
import { Footer } from '../UI/Footer';

interface BoardProps {}

interface BoardState {
  grid: GridType;
  currentPlayer: 1 | 2;
  isGameActive: boolean;
  movesMade: number;
}

const StyledBoard = styled.div`
  width: ${700 + (COLUMN_AMOUNT * tokenMargin * 2)}px;
  height: ${600 + (ROW_AMOUNT * tokenMargin * 2)}px;
  background: midnightblue;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(${COLUMN_AMOUNT}, 1fr);
  grid-template-rows: repeat(${ROW_AMOUNT}, 1fr);
  border-radius: 6px;
`;

export class Board extends React.Component<BoardProps, BoardState> {
  state: BoardState = {
    grid: new EmptyGrid().grid,
    currentPlayer: 1,
    isGameActive: true,
    movesMade: 0,
  }

  placeToken = (event: React.MouseEvent<HTMLDivElement>) => {
    const { grid, currentPlayer, isGameActive, movesMade } = this.state;

    const el = event.target as HTMLDivElement;

    const x = Number(el.getAttribute('x'));
    const y = Number(el.getAttribute('y'));

    if(x === ROW_AMOUNT - 1 ? false : (grid[x + 1][y] === 0) || !isGameActive) {
      return;
    }

    if(grid[x][y] === 0) {
      const utils = new CheckUtils(grid, currentPlayer);

      const newGrid = [...grid];
      newGrid[x][y] = currentPlayer;

      this.setState(prevState => (
        { grid: newGrid,
          movesMade: prevState.movesMade + 1
      }), () => {
        if (movesMade >= 6 ? utils.checkForWin() : false || movesMade === MAX_MOVES) {
          this.setState({ isGameActive: false });
        } else {
          this.changeCurrentPlayer();
        }
      });
    }
  }

  changeCurrentPlayer = () => {
    const { currentPlayer } = this.state;
    const nextPlayer = getNextPlayer(currentPlayer);

    this.setState({ currentPlayer: nextPlayer});
  }

  resetGame = () => {
    this.setState({
      grid: new EmptyGrid().grid,
      isGameActive: true,
      movesMade: 0,
      currentPlayer: 1,
    })
  }

  render() {
    const { grid, isGameActive, currentPlayer } = this.state;

    return (
      <div>
        <StyledBoard>
          {grid.map((xRow, xIdx) => {
            return xRow.map((xColumn, yIdx) => {
              return (
                <PlayerToken
                  key={`${xIdx} ${yIdx}`}
                  onClick={this.placeToken}
                  x={xIdx}
                  y={yIdx}
                  player={grid[xIdx][yIdx]}
                />
              )
            })
          })}
        </StyledBoard>
        <Footer
          isGameActive={isGameActive}
          currentPlayer={currentPlayer}
          resetGame={this.resetGame}
        />
      </div>
    )
  }
}
