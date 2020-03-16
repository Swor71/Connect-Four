import React from 'react';
import styled from 'styled-components';
import { PlayerToken, tokenMargin } from '../PlayerTokenComponent';
import { GridType } from '../../common/types';
import { CheckUtils } from '../../utils/gameLogic';
import { rowAmount, columnAmount, emptyGrid, maxMoves } from '../../consts';
import { getPlayerColor, getNextPlayer } from '../../utils/utils';
import { Button } from '../UI/Button';

interface BoardProps {

}

interface BoardState {
  grid: GridType;
  currentPlayer: 1 | 2;
  isGameActive: boolean;
  movesMade: number;
}

const StyledBoard = styled.div`
  width: ${700 + (columnAmount * tokenMargin * 2)}px;
  height: ${600 + (rowAmount * tokenMargin * 2)}px;
  background: midnightblue;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(${columnAmount}, 1fr);
  grid-template-rows: repeat(${rowAmount}, 1fr);
  border-radius: 6px;
`;

export class Board extends React.Component<BoardProps, BoardState> {
  state: BoardState = {
    grid: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 2, 1],
        [1, 2, 1, 0, 1, 2, 1],
        [2, 2, 1, 2, 2, 1, 2],
        [1, 1, 2, 2, 2, 1, 2],
      ],
    currentPlayer: 1,
    isGameActive: true,
    movesMade: 0,
  }

  placeToken = (event: React.MouseEvent<HTMLDivElement>) => {
    const { grid, currentPlayer, isGameActive, movesMade } = this.state;

    const el = event.target as HTMLDivElement;

    const x = Number(el.getAttribute('x'));
    const y = Number(el.getAttribute('y'));

    if( !isGameActive || grid[x][y] !== 0 || x === rowAmount - 1 ? false : (grid[x + 1][y] === 0)) {
        return;
      }

    const utils = new CheckUtils(grid, currentPlayer);

    const newGrid = [...grid];
    newGrid[x][y] = currentPlayer;

    this.setState(prevState => (
      { grid: newGrid,
        movesMade: prevState.movesMade + 1
     }), () => {
      if (utils.checkForWin() || movesMade === maxMoves) {
        this.setState({ isGameActive: false });
      } else {
        this.changeCurrentPlayer();
      }
    });
  }

  changeCurrentPlayer = () => {
    const { currentPlayer } = this.state;
    const nextPlayer = getNextPlayer(currentPlayer);

    this.setState({ currentPlayer: nextPlayer});
  }

  resetGame = () => {
    this.setState({
      isGameActive: true,
      grid: emptyGrid,
      movesMade: 0,
    });
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
        {!isGameActive && <h1 style={{color: getPlayerColor(currentPlayer)}}>{`Player ${currentPlayer} won!`} <Button onClick={this.resetGame}>RESET</Button></h1>}
      </div>
    )
  }
}
