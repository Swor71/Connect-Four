import React, { Component } from 'react'
import styled from 'styled-components';
import { playerColor } from '../../consts';

interface Props {
  onClick(): void;
  children: React.ReactNode;
}
interface State {

}

const StyledButton = styled.button`
  width: 120px;
  height: 30px;
  border: 2px solid darkblue;
  border-radius: 4px;
  color: darkblue;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: ${playerColor.DEFAULT};
`;

export class Button extends Component<Props, State> {

  render() {
    const {children, ...rest} = this.props;

    return <StyledButton {...rest}>{children}</StyledButton>
  }
}
