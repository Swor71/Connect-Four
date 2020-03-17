import React from 'react';
import styled from 'styled-components';

const StyledRules = styled.div`
  width: 230px;
  height: 350px;
  border: 2px dotted darkblue;
  position: absolute;
  left: calc((100vw - 1000px) / 8);
  padding: 0 10px;
  border-radius: 6px;
  h3 {
    text-align: center;
  }
  div {
    padding: 5px 0;
    text-align: justify;
  }
`

export const Rules = () => {
  return <StyledRules>
    <h3>Rules:</h3>
    <div>
      Two players, interchangeably, place tokens on the board starting from the bottom row.
    </div>
    <div>
      To win Connect Four you must be the first player to get four of your colored tokens in a row either horizontally, vertically or diagonally.
    </div>
  </StyledRules>
}
