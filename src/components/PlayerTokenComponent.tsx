import React from "react";
import styled from "styled-components";
import { getPlayerColor } from "../utils/utils";


interface TokenProps {
  player: number;
}

const StyledToken = styled.div<TokenProps>`
  height: 100px;
  width: 100px;
  background-color: ${props => getPlayerColor(props.player)};
  border-radius: 50%;
  margin: 5px;
`;

export class PlayerToken extends React.Component<TokenProps> {


  render() {
    const { player } = this.props;

    return <StyledToken player={player}/>;
  }
}
