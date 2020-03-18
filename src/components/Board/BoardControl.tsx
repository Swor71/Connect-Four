import React from 'react'
import { getPlayerColor } from '../../utils/utils';
import { Button } from '../UI/Button';
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
  justify-content: space-around;
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
        {isGameActive
          ? <StyledHeader currentPlayer={currentPlayer} >Current Player: {currentPlayer}</StyledHeader>
          : <StyledHeader currentPlayer={currentPlayer} >Player {currentPlayer} wins!</StyledHeader>
        }
        <Button>RESET</Button>
        <Rules />
      </BoardControlWrapper>
    )
  }
}
