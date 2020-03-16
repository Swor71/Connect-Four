import React from 'react'
import styled from 'styled-components';
import { PLAYER_COLOR } from '../../consts';

interface ButtonProps {
  onClick(): void;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  width: 120px;
  height: 30px;
  border: 2px solid darkblue;
  border-radius: 4px;
  color: darkblue;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: ${PLAYER_COLOR.DEFAULT};
`;

export class Button extends React.PureComponent<ButtonProps> {
  render() {
    const {children, ...rest} = this.props;

    return <StyledButton {...rest}>{children}</StyledButton>
  }
}
