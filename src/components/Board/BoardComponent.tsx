import React from 'react';
import styled from 'styled-components';
import { PlayerToken } from '../PlayerTokenComponent';
import { GridType } from '../../common/types';

interface BoardProps {

}

interface BoardState {
  grid: GridType;
  currentPlayer: 1 | 2;
}

const StyledBoard = styled.div`
  width: 770px;
  height: 660px;
  background: midnightblue;
  margin: auto auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border-radius: 6px;
`;

export class Board extends React.Component<BoardProps, BoardState> {
  state: BoardState = {
    grid: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 2, 2],
      [1, 2, 1, 0, 1, 2, 1],
      [2, 2, 1, 2, 2, 1, 2],
      [1, 1, 2, 2, 2, 1, 2],
    ],
    currentPlayer: 1,
  }

  placeToken = (event: React.MouseEvent<HTMLDivElement>) => {
    const { grid, currentPlayer } = this.state;
    const el = event.target as HTMLDivElement;

    const x = Number(el.getAttribute('x'));
    const y = Number(el.getAttribute('y'));

    if(grid[x][y] !== 0) {
      return;
    }

    const newGrid = [...grid];
    newGrid[x][y] = currentPlayer;

    this.setState({ grid: newGrid }, () => this.changeCurrentPlayer());
  }

  changeCurrentPlayer = () => {
    const { currentPlayer } = this.state;

    if (currentPlayer === 1) {
      this.setState({ currentPlayer: 2})
    }

    if (currentPlayer === 2) {
      this.setState({ currentPlayer: 1})
    }

  }

  render() {
    const { grid } = this.state;

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
      </div>
    )
  }
}
