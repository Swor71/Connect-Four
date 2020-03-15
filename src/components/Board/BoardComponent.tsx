import React from 'react';
import styled from 'styled-components';
import { PlayerToken } from '../PlayerTokenComponent';
import { GridType } from '../../common/types';

interface BoardProps {

}

interface BoardState {
  grid: GridType;
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
      [1, 2, 1, 1, 2, 1, 1],
      [1, 2, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 2, 2, 2],
      [1, 2, 1, 1, 1, 2, 1],
      [2, 2, 1, 2, 2, 1, 2],
      [1, 1, 2, 2, 2, 1, 2],
    ],
  }

  logDetails = (event: Event) => {

    console.log(event.target);
  }

  render() {
    const {grid} = this.state;

    return (
      <div>
        <StyledBoard>
          {grid.map((xRow, xIdx) => {
            return xRow.map((xColumn, yIdx) => {
              return <PlayerToken key={`${xIdx} ${yIdx}`} onClick={this.logDetails} x={xIdx} y={yIdx} player={grid[xIdx][yIdx]}/>
            })
          })}
        </StyledBoard>
      </div>
    )
  }
}
