import React, { Component } from 'react'
import { getPlayerColor } from '../../utils/utils';
import { Button } from '../UI/Button';
import styled from 'styled-components';
import { Rules } from '../UI/Rules';

interface BoardControlProps {
  currentPlayer: number;
  isGameActive: boolean;
  resetGame(): void;
  undoMove(): void;
  children?: React.ReactNode;
}

const BoardControlWrapper = styled.div`
  width: 260px;
  height: 660px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledHeader = styled.h1<BoardControlProps>`
  color: ${({currentPlayer}) => getPlayerColor(currentPlayer)};
`;

export class BoardControl extends Component<BoardControlProps> {
  render() {
    const {isGameActive, currentPlayer, resetGame, undoMove} = this.props;

    return (
      <BoardControlWrapper>
        {isGameActive
          ? <StyledHeader {...this.props}>Current Player: {currentPlayer}</StyledHeader>
          : <StyledHeader {...this.props}>Player {currentPlayer} wins!</StyledHeader>
        }
        <Button onClick={resetGame}>RESET</Button>
        <Button onClick={undoMove}>UNDO A MOVE</Button>
        <Rules />
      </BoardControlWrapper>
    )
  }
}
