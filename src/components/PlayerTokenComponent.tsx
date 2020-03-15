import React from "react";
import styled from "styled-components";

interface TokenProps {
  player?: number;
}

const StyledToken = styled.div<TokenProps>`
  height: 100px;
  width: 100px;
  background-color: ${props => {
    if (props.player === 1) {
      return "marron";
    } else if (props.player === 2) {
      return "yellow";
    } else {
      return "ivory";
    }
  }};
  border-radius: 50%;
  margin: 5px;
`;

export class PlayerToken extends React.Component<TokenProps> {
  render() {
    return <StyledToken />;
  }
}
