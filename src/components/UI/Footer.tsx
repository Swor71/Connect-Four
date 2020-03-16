import React, { Component } from 'react'
import { getPlayerColor } from '../../utils/utils';
import { Button } from './Button';
import styled from 'styled-components';

interface FooterProps {
  currentPlayer: number;
  isGameActive: boolean;
  movesMade: number;
  resetGame(): void;
  children?: React.ReactNode;
}

const StyledHeader = styled.h1<FooterProps>`
  color: ${({currentPlayer}) => getPlayerColor(currentPlayer)}
`

export class Footer extends Component<FooterProps> {
  render() {
    const {isGameActive, currentPlayer, movesMade, resetGame} = this.props;

    return (
      <div>
        {isGameActive ? (
          <div>
            <StyledHeader {...this.props}>Current Player: {currentPlayer}</StyledHeader>
            <h2>Moves: {movesMade}</h2>
          </div>
        ) : (
          <div>
            <StyledHeader {...this.props}>Player {currentPlayer} wins!</StyledHeader>
            <Button onClick={resetGame}>RESET</Button>
          </div>
        )}
      </div>
    )
  }
}
