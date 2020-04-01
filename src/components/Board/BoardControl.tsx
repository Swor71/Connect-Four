import React from 'react'
import { getPlayerColor } from '../../utils/utils';
import { Button } from '../UI/Button/Button';
import styled from 'styled-components';
import { Rules } from '../UI/Rules';
import { store } from '../../store/store';
import { observer } from 'mobx-react';

interface StyledHeaderProps {
  currentPlayer: number;
}

const BoardControlWrapper = styled.div`
  width: 260px;
  height: 660px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled.h1<StyledHeaderProps>`
  color: ${({currentPlayer}) => getPlayerColor(currentPlayer)};
`;

@observer
export class BoardControl extends React.PureComponent {
  render() {
    const { isGameActive, currentPlayer } = store;

    return (
      <BoardControlWrapper>
        <h1>Connect Four</h1>
          <StyledHeader currentPlayer={currentPlayer}>{
          isGameActive
            ? `Player ${currentPlayer} wins!`
            : `Current Player: ${currentPlayer}`
          }</StyledHeader>
        <Button>RESET</Button>
        <Rules />
      </BoardControlWrapper>
    )
  }
}
