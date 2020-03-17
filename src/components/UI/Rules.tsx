import React from 'react';
import styled from 'styled-components';

const StyledRules = styled.div`
  width: 100%;
  height: 300px;
  border: 2px dotted darkblue;
  padding: 0 10px;
  border-radius: 6px;
  h3 {
    text-align: center;
  }
  div {
    margin: 20px 0;
    text-align: justify;
  }
`;

export const Rules = () => {
  return (
    <StyledRules>
      <h3>Rules:</h3>
      <div>
        Two players, interchangeably, place tokens on the board starting from the bottom row.
      </div>
      <div>
        To win Connect Four you must be the first player to get four of your colored tokens in a row either horizontally, vertically or diagonally.
      </div>
    </StyledRules>
  )
}
