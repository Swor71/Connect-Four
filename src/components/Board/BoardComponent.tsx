import React from 'react';
import styled from 'styled-components';
import { PlayerToken } from '../PlayerTokenComponent';
import { GridType } from '../../common/types';
import { CheckUtils } from '../../utils/gameLogic';
import { rowAmount, columnAmount, tokenMargin } from '../../consts';
import { getPlayerColor, getNextPlayer } from '../../utils/utils';

interface BoardProps {

}

interface BoardState {
  grid: GridType;
  currentPlayer: 1 | 2;
  isGameActive: boolean;
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
  }

  placeToken = (event: React.MouseEvent<HTMLDivElement>) => {
    const { grid, currentPlayer, isGameActive } = this.state;
    const el = event.target as HTMLDivElement;

    const utils = new CheckUtils(grid, currentPlayer);

    const x = Number(el.getAttribute('x'));
    const y = Number(el.getAttribute('y'));

    if(grid[x][y] !== 0 || grid[x + 1][y] === 0 || !isGameActive) {
      return;
    }

    const newGrid = [...grid];
    newGrid[x][y] = currentPlayer;

    this.setState({ grid: newGrid }, () => {
      if (utils.checkWin()) {
        this.setState({isGameActive: false});
      }
    });

    if(isGameActive) {
      this.changeCurrentPlayer();
    }
  }

  changeCurrentPlayer = () => {
    const { currentPlayer } = this.state;
    const nextPlayer = getNextPlayer(currentPlayer);

    this.setState({ currentPlayer: nextPlayer});
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
        {!isGameActive && <h1 style={{color: getPlayerColor(getNextPlayer(currentPlayer))}}>{`Player ${getNextPlayer(currentPlayer)} won!`}</h1>}
      </div>
    )
  }
}
