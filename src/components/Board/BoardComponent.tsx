import React from 'react';
import styled from 'styled-components';
import { PlayerToken } from '../PlayerTokenComponent';

interface Props {

}

interface State {

}

const StyledBoard = styled.div`
  width: 770px;
  height: 660px;
  background: midnightblue;
  margin: auto auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export class Board extends React.Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <StyledBoard>
          <PlayerToken player={0}/>
        </StyledBoard>
      </div>
    )
  }
}
