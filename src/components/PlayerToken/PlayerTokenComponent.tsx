import React from "react";
import styled from "styled-components";
import { getPlayerColor } from "../../utils/utils";

export const tokenMargin = 5;

interface TokenProps {
  player: number;
  x: number;
  y: number;
  onClick(event: React.MouseEvent<HTMLDivElement>): void;
}

const StyledToken = styled.div<TokenProps>`
  height: 100px;
  width: 100px;
  background-color: ${props => getPlayerColor(props.player)};
  border-radius: 50%;
  margin: ${tokenMargin}px;
  cursor: pointer;
`;

export class PlayerToken extends React.PureComponent<TokenProps> {
  render() {
    return <StyledToken {...this.props} />;
  }
}
