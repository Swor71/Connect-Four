import React from 'react'
import styled from 'styled-components';
import { PLAYER_COLOR } from '../../consts';
import { observer } from 'mobx-react';
import { store } from '../../store/store';

interface ButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border: 2px solid darkblue;
  border-radius: 4px;
  color: darkblue;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  background-color: ${PLAYER_COLOR.DEFAULT};
  transition: all 0.3s;
  &:hover {
    box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
    transform: translateY(-1px);
  }
`;
@observer
export class Button extends React.PureComponent<ButtonProps> {
  render() {
    return (
      <StyledButton onClick={store.resetGame}>{this.props.children}</StyledButton>
    )
  }
}
