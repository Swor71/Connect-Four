import React, { Component } from 'react'
import { getPlayerColor } from '../../utils/utils';
import { Button } from './Button';
import styled from 'styled-components';

interface Props {
  currentPlayer: number;
  isGameActive: boolean;
  resetGame(): void;
  children?: React.ReactNode;
}

interface State {

}

const StyledHeader = styled.h1<Props>`
  color: ${({currentPlayer}) => getPlayerColor(currentPlayer)}
`

export class Footer extends Component<Props, State> {
  state = {}

  render() {
    const {isGameActive, currentPlayer, resetGame} = this.props;

    return (
      <div>
        {!isGameActive && <StyledHeader {...this.props}>Player {currentPlayer} won!</StyledHeader>}

        {isGameActive && <StyledHeader {...this.props}>Current Player: {currentPlayer}</StyledHeader>}

        {!isGameActive && <Button onClick={resetGame}>RESET</Button>}
      </div>
    )
  }
}
