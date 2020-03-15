import React from "react";
import styled from "styled-components";
import { getPlayerColor } from "../utils/utils";


interface TokenProps {
  player: number;
  x: number;
  y: number;
  onClick(e: any): any;
}

const StyledToken = styled.div<TokenProps>`
  height: 100px;
  width: 100px;
  background-color: ${props => getPlayerColor(props.player)};
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
`;

export class PlayerToken extends React.Component<TokenProps> {
  render() {
    return <StyledToken {...this.props} />;
  }
}
